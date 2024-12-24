/** @format */
/** @format */

const {success} = require('../../../services/response');
const {generateRandomCode} = require('../../../utils/util');
const {Shipment} = require('../../models/shipment');
const orderService = require('../../../services/axios/order');
const _cloneDeep = require('lodash/cloneDeep');
const create = ({bodymen: {body}, user}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });
      if (!body.status) body.status = 'confirmed';
      body.code = generateRandomCode('VD');
      body.updatedBy = {
        _id: user?._id,
        name: user?.name,
        avatar: user?.avatar,
      };
      return resolve(Shipment.create(body));
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

const update = ({params, bodymen: {body}, user}, res, next) => {
  let oldShipment;
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });

      const shipment = await Shipment.findOne({_id: params.id});
      if (!shipment) {
        return reject(
          new Error(
            JSON.stringify({
              item: 404,
              statusText: 'SHIPMENT_NOT_FOUND',
              message: 'Không tìm thấy !',
            }),
          ),
        );
      }

      oldShipment = _cloneDeep(shipment);

      let bodyUpdate = {...body};
      bodyUpdate.updatedBy = {
        _id: user?._id,
        name: user?.name,
        avatar: user?.avatar,
      };
      return resolve(Object.assign(shipment, bodyUpdate).save());
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
      if (res.data.status !== oldShipment.status) {
        await orderService.updateOne({
          method: 'updateOneOrder',
          query: {_id: res.data.order._id},
          data: {
            status: res.data.status,
          },
        });
      }
    })
    .catch(next);
};

module.exports = {
  create,
  update,
};
