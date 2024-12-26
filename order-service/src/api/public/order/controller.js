/** @format */

const {success} = require('../../../services/response');
const {generateOrderCode} = require('../../../utils/util');
const {Order} = require('../../models/order');
const productService = require('../../../services/axios/product');
const shipmentService = require('../../../services/axios/shipment');
const {getIO} = require('../../../services/socket');
const EmailService = require('../../../services/mail');
const create = ({bodymen: {body}, user}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });
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
    .then((item) => ({data: item.view()}))
    .then(success(res))
    .then(async (res) => {
      if (res.data.isShipment) {
        await updateProduct(res.data);
        await shipmentService.createOne({
          carrier: res.data.carrier,
          cod: res.data.total_price,
          order: {
            _id: res.data._id,
            code: res.data.code,
            items: res.data.items,
            customer: res.data.customer,
          },
        });

        const url = `http://localhost:3000/order/${res.data._id}`;
        await new EmailService(res.data.customer, url)
          .sendWelcome()
          .then(() => {
            console.log('send mail success');
          })
          .catch((err) => {
            console.log(err);
          });
        // io.to(res.data.customer?._id).emit('ORDER_CREATED', {
        //   order: res.data,
        //   message: `Đơn hàng ${res.data.code} đã tạo thành công!`,
        // });
      }
    })
    .catch(next);
};

const update = ({params, bodymen: {body}, user}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });

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

      let bodyUpdate = {
        ...body,
        customer: {
          ...order.customer,
          ...body.customer,
        },
      };
      if (order.isShipment || order.status === 'confirmed') {
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
    .then((item) => ({data: item.view()}))
    .then(success(res))
    .then(async (res) => {
      if (res.data.isShipment) {
        await updateProduct(res.data);
        await shipmentService.createOne({
          carrier: res.data.carrier,
          cod: res.data.total_price,
          order: {
            _id: res.data._id,
            code: res.data.code,
            items: res.data.items,
            customer: res.data.customer,
          },
        });

        const io = getIO();
        io.to(res.data.customer?._id).emit('ORDER_UPDATED', {
          order: res.data,
          message: `Đơn hàng ${res.data.code} đã cập nhật thành công!`,
        });

        if (res.data.status === 'completed') {
          await new EmailService(res.data.customer)
            .notifyOrder()
            .then(() => {
              console.log('send mail success');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    })
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
            message: `Product ${item.code} không tồn tại`,
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
