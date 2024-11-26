/** @format */

const {success} = require('../../../services/response');
const {Cart} = require('../../models/cart');
const create = ({bodymen: {body}}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });
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
const index = ({querymen: {query, select, cursor}}, res, next) => {
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

const destroy = (req, res, next) => {
  const {params, body} = req;
  console.log({params, body});
  new Promise(async (resolve, reject) => {
    try {
      const item = await Cart.findOneAndDelete({
        // user_id: body.userId,
        _id: params.id,
      });
      if (!item) {
        return reject(
          new Error(
            JSON.stringify({
              status: 404,
              statusText: 'ITEM_NOT_FOUND:',
              message: 'Không tìm thấy!',
            }),
          ),
        );
      }

      return resolve(item);
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
    .then(success(res, 200))
    .catch(next);
};

module.exports = {
  index,
  create,
  destroy,
};
