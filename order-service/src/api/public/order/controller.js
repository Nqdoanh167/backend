/** @format */

const {success} = require('../../../services/response');
const {Order} = require('../../models/order');
const create = ({bodymen: {body}, user}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });
      body.status = 'created';
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
    .catch(next);
};

module.exports = {
  create,
};
