/** @format */

const {success} = require('../../../services/response');
const {Cart} = require('../../models/cart');
const create = ({bodymen: {body}, user}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });
      const item = await Cart.findOne({
        'item.code': body.item.code,
        'updatedBy._id': user?._id,
      });
      if (item) {
        item.quantity += body.quantity;
        if (item.quantity >= item.item.inventory) {
          return reject(
            new Error(
              JSON.stringify({
                status: 400,
                statusText: 'BAD_REQUEST',
                message: 'Không thể thêm số lượng đã chọn vào giỏ hàng vì sẽ vượt quá giới hạn mua hàng của bạn',
              }),
            ),
          );
        }
        return resolve(item.save());
      }

      body.updatedBy = {
        _id: user?._id,
        name: user?.name,
        avatar: user?.avatar,
      };
      return resolve(Cart.create(body));
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
    .catch(next);
};
const index = ({querymen: {query, select, cursor}, user}, res, next) => {
  query['updatedBy._id'] = user?._id;
  Cart.countDocuments(query)
    .lean()
    .then((total) => {
      if (!total) {
        return {data: [], total};
      }
      return Cart.find(query, select, cursor).then((docs) => ({
        total,
        results: docs.length,
        data: docs.map((doc) => doc.view()),
      }));
    })
    .then(success(res))
    .catch(next);
};

const deleteMulti = async ({querymen: {query}, user}, res, next) => {
  query['updatedBy._id'] = user?._id;
  Cart.deleteMany(query)
    .then((data) => ({data}))
    .then(success(res))
    .catch(next);
};

module.exports = {
  index,
  create,
  deleteMulti,
};
