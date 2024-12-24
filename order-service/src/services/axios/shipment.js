/** @format */

const {$post} = require('.');

/** @format */
const paths = ['shipment-service'];

const createOne = (data) => {
  return $post(paths, [{method: 'createOneShipment', data}]);
};

module.exports = {
  createOne,
};
