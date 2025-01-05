/** @format */

const {success} = require('../../../services/response');
const {generateOrderCode, sanitizeBody} = require('../../../utils/util');
const {Order} = require('../../models/order');
const productService = require('../../../services/axios/product');
const shipmentService = require('../../../services/axios/shipment');
const userService = require('../../../services/axios/user');
const {getIO} = require('../../../services/socket');
const EmailService = require('../../../services/mail');
const {Status} = require('../../models/status');
const _cloneDeep = require('lodash/cloneDeep');
const create = ({bodymen: {body}, user}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      sanitizeBody(body);
      if (!body.status) body.status = 'created';
      if (!body.payment_type) body.payment_type = 'cod';
      body.code = generateOrderCode();
      body.customer._id = user?._id;
      body.updatedBy = {
        _id: user?._id,
        name: user?.name,
        avatar: user?.avatar,
      };
      return resolve(Order.create(body));
    } catch (error) {
      return reject(
        new Error(
          JSON.stringify({
            status: 500,
            statusText: 'ERROR',
            message: error.toString(),
          }),
        ),
      );
    }
  })
    .then(async (order) => {
      const io = getIO();
      const adminIds = await userService.getAdminIds();
      adminIds.map((adminId) => {
        io.to(adminId?._id).emit('ORDER_CREATED', {
          order: order,
          message: `Đơn hàng ${order.code} vừa được tạo!`,
        });
      });

      const statusData = await Status.findOne({code: order.status}).lean();

      if (statusData?.isShipment) {
        await updateProduct(order);
        await shipmentService.createOne({
          carrier: order.carrier,
          cod: order.totalAmountAwaitPaid,
          order: {
            _id: order._id,
            code: order.code,
            items: order.items,
            customer: order.customer,
          },
        });
      }

      return order;
    })
    .then((item) => ({data: item.view()}))
    .then(success(res))
    .catch(next);
};

const update = ({params, bodymen: {body}, user}, res, next) => {
  let oldOrder = null;
  new Promise(async (resolve, reject) => {
    try {
      sanitizeBody(body);

      const order = await Order.findOne({_id: params.id});
      if (!order) {
        return reject(
          new Error(
            JSON.stringify({
              item: 404,
              statusText: 'ORDER_NOT_FOUND',
              message: 'Không tìm thấy !',
            }),
          ),
        );
      }

      oldOrder = _cloneDeep(order);

      let bodyUpdate = {
        ...body,
        customer: {
          ...order.customer,
          ...body.customer,
        },
      };

      const statusData = await Status.findOne({code: order.status}).lean();

      if (statusData?.isShipment) {
        bodyUpdate = {
          status: body.status,
        };
      }

      bodyUpdate.updatedBy = {
        _id: user?._id,
        name: user?.name,
        avatar: user?.avatar,
      };
      return resolve(Object.assign(order, bodyUpdate).save());
    } catch (error) {
      return reject(
        new Error(
          JSON.stringify({
            status: 500,
            statusText: 'ERROR',
            message: error.toString(),
          }),
        ),
      );
    }
  })

    .then(async (order) => {
      const io = getIO();
      io.to(order.customer?._id).emit('ORDER_UPDATED', {
        order: order,
        message: `Đơn hàng ${order.code} vừa được cập nhật!`,
      });

      if (order.status === 'completed' && oldOrder?.status !== 'completed') {
        await new EmailService(order.customer)
          .notifyOrder()
          .then(() => {
            console.log('send mail success');
          })
          .catch((err) => {
            console.log(err);
          });
      }

      const statusOldOrder = await Status.findOne({code: oldOrder?.status}).lean();
      const statusNewOrder = await Status.findOne({code: order?.status}).lean();
      if (!statusOldOrder?.isShipment && statusNewOrder.isShipment) {
        await updateProduct(order);
        await shipmentService.createOne({
          status: order.status === 'created' ? null : order.status,
          carrier: order.carrier,
          cod: order.totalAmountAwaitPaid,
          order: {
            _id: order._id,
            code: order.code,
            items: order.items,
            customer: order.customer,
          },
        });
      }
      return order;
    })
    .then((item) => ({data: item.view()}))
    .then(success(res))
    .catch(next);
};

const updateProduct = async (order) => {
  await Promise.all(
    order.items.map(async (item) => {
      const product = await productService.findOne({
        code: item.code,
      });

      if (!product) {
        throw new Error(
          JSON.stringify({
            status: 404,
            statusText: 'NOT_FOUND',
            message: `Product ${item.code} không tồn tại`,
          }),
        );
      }
      if (product.inventory < item.quantity) {
        throw new Error(
          JSON.stringify({
            status: 404,
            statusText: 'NOT_FOUND',
            message: `Product ${item.code} không đủ hàng`,
          }),
        );
      }

      await productService.updateOne(
        {
          code: item.code,
        },
        {
          variants: {
            ...product,
            inventory: product.inventory - item.quantity,
          },
        },
      );
    }),
  );
};

module.exports = {
  create,
  update,
};
