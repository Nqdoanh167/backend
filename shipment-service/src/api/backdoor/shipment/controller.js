/** @format */
const {Schema: bodySchema} = require('bodymen');
const {Schema: querySchema} = require('querymen');
const {Shipment, shipmentCreateDto} = require('../../models/shipment');
const {notFoundBackdoor, successBackdoor} = require('../../../services/response');
const {generateRandomCode} = require('../../../utils/util');

const queryValidator = (query, schema) => {
  return new Promise((resolve, reject) => {
    const _schema = new querySchema(schema);

    _schema.validate(query, function (err) {
      if (err) {
        return resolve(err);
      }
      return resolve({valid: true, querymen: _schema.parse()});
    });
  });
};
const bodyValidator = (query, schema) => {
  return new Promise((resolve, reject) => {
    const _schema = new bodySchema(schema);

    _schema.validate(query, function (err) {
      if (err) {
        return resolve(err);
      }
      return resolve({valid: true, body: _schema.parse()});
    });
  });
};

const createOneShipment = async (bodyData) => {
  let result = {};

  const bodyModel = {
    ...shipmentCreateDto,
  };

  const handlerValidatorBody = await bodyValidator(bodyData.data, bodyModel);
  if (!handlerValidatorBody.valid) {
    return notFoundBackdoor({
      bodyParams: bodyData.data,
      status: 422,
      statusText: 'BAD_USER_INPUT',
      data: handlerValidatorBody,
    });
  }
  const {body} = handlerValidatorBody;

  try {
    body.code = generateRandomCode('VD');
    const shipment = await Shipment.create(body);
    result.data = shipment.view(true);
    result = successBackdoor({queryParams: bodyData.query, data: result});
  } catch (err) {
    result = notFoundBackdoor({
      queryParams: bodyData.query,
      bodyParams: bodyData.data,
      message: err.toString(),
      status: 500,
      statusText: 'ERROR',
    });
  }

  return result;
};

module.exports = {
  createOneShipment,
};
