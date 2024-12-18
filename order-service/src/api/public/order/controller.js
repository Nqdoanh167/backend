/** @format */

const {success} = require('../../../services/response');
const {generateOrderCode} = require('../../../utils/util');
const {Order} = require('../../models/order');
const productService = require('../../../services/axios/product');
const create = ({bodymen: {body}, user}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });
      body.status = 'created';
      body.code = generateOrderCode();
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
      await updateProduct(res?.data);
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

      const bodyUpdate = {...body};
      if (order.isShipment) {
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
      await updateProduct(res?.data);
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
