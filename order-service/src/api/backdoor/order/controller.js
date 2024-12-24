/** @format */
const {Schema: bodySchema} = require('bodymen');
const {Schema: querySchema} = require('querymen');
const {Order, orderUpdateDTO} = require('../../models/order');
const {notFoundBackdoor, successBackdoor} = require('../../../services/response');

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

const updateOneOrder = async (bodyData) => {
  let result = {};

  const queryModel = {
    _id: {
      type: String,
    },
  };

  const handlerValidatorQuery = await queryValidator(bodyData.query.query, queryModel);
  if (!handlerValidatorQuery.valid) {
    return notFoundBackdoor({
      queryParams: bodyData.query,
      status: 422,
      statusText: 'BAD_USER_INPUT',
      data: handlerValidatorQuery,
    });
  }

  const {
    querymen: {query, select, cursor},
  } = handlerValidatorQuery;

  try {
    const order = await Order.findOne(query);
    if (!order) {
      return notFoundBackdoor({
        queryParams: bodyData.query,
        status: 404,
        statusText: 'NOT_FOUND',
        message: 'Order not found',
      });
    }

    order.status = bodyData.query.data.status;

    const updated = await order.save();
    result.data = updated.view(true);
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
  updateOneOrder,
};
