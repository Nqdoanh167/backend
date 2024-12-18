/** @format */
const {Schema: bodySchema} = require('bodymen');
const {Schema: querySchema} = require('querymen');
const {Product, productUpdateDto} = require('../../models/product');
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

const findOneProduct = async (queryParams) => {
  let result = {};
  try {
    // Valid
    const queryModel = {
      code: {
        type: [Array],
        paths: ['variants.code'],
      },
    };

    const handlerValidator = await queryValidator(queryParams.query, queryModel);
    if (!handlerValidator.valid) {
      return notFoundBackdoor({
        queryParams,
        status: 422,
        statusText: 'BAD_USER_INPUT',
        data: handlerValidator,
      });
    }

    const {
      querymen: {query, select, cursor},
    } = handlerValidator;
    await Product.findOne(query)
      .lean()
      .then((p) => {
        const variant = p.variants.find((v) => v.code === query['variants.code']);
        result.data = {
          title: p.title,
          description: p.description,
          category: p.category,
          brand: p.brand,
          averageRating: p.averageRating,
          quantity_sold: p.quantity_sold,
          status: p.status,
          quantityRating: p.quantityRating,
          ...variant,
        };
      });
    result = successBackdoor({queryParams, data: result});
  } catch (error) {
    console.log('error findOneProduct', error);
    result = notFoundBackdoor({
      queryParams,
      message: error.toString(),
      status: 500,
      statusText: 'ERROR',
    });
  }
  return result;
};

const updateOneProduct = async (bodyData) => {
  let result = {};

  const queryModel = {
    code: {
      type: [Array],
      paths: ['variants.code'],
    },
  };

  const handlerValidatorQuery = await queryValidator(bodyData.query, queryModel);
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

  // const bodyModel = {
  //   ...productUpdateDto,
  // };

  // const handlerValidatorBody = await bodyValidator(bodyData.data, bodyModel);
  // if (!handlerValidatorBody.valid) {
  //   return notFoundBackdoor({
  //     bodyParams: bodyData.data,
  //     status: 422,
  //     statusText: 'BAD_USER_INPUT',
  //     data: handlerValidatorBody,
  //   });
  // }
  // const {body} = handlerValidatorBody;
  // console.log({body});

  try {
    const product = await Product.findOne(query);

    product.variants = product.variants.map((v) => {
      if (v.code === bodyData.data.variants.code) {
        return {
          ...v,
          ...bodyData.data.variants,
        };
      }
      return v;
    });
    const updated = await product.save();
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
  findOneProduct,
  updateOneProduct,
};
