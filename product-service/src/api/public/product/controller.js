/** @format */

const {notFound, success} = require('../../../services/response');
const {generateCode} = require('../../../utils/util');
const {Product} = require('../../models/product');
const create = ({bodymen: {body}}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });
      return resolve(Product.create(body));
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
  const {search} = query;
  if (search) {
    query.$text = {$search: search};
    delete query.search;
  }
  Product.countDocuments(query)
    .lean()
    .then((total) => {
      if (!total) {
        return {data: [], total};
      }
      return Product.find(query, select, cursor).then((docs) => ({
        total,
        results: docs.length,
        data: docs.map((doc) => doc.view()),
      }));
    })
    .then(success(res))
    .catch(next);
};

const show = ({params, querymen: {query, select, cursor}}, res, next) => {
  let queryObj = {slug: params.slug};
  Product.findOne(queryObj)
    .then(notFound(res))
    .then((item) => {
      if (item) {
        if (query['variant']) {
          const filteredVariant = item.variants.find((v) => v.code === query['variant']);
          item = {
            ...item.toObject(),
            variantDetail: filteredVariant ? filteredVariant : item.variantDisplay[0],
          };
        }
        return {
          data: item,
        };
      }
      return {data: null};
    })
    .then(success(res))
    .catch(next);
};

const update = ({bodymen: {body}, params}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) delete body[key];
      });
      const item = await Product.findOne({_id: params.id});
      if (!item) {
        return reject(
          new Error(
            JSON.stringify({
              item: 404,
              statusText: 'ITEM_NOT_FOUND',
              message: 'Không tìm thấy !',
            }),
          ),
        );
      }

      return resolve(Object.assign(item, body).save());
    } catch (error) {
      return reject(new Error(JSON.stringify({item: 500, message: error.toString()})));
    }
  })
    .then((item) => ({data: item.view()}))
    .then(success(res))
    .catch(next);
};

const destroy = ({params}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      const item = await Product.findOneAndDelete({_id: params.id});
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

const getByVariantCode = ({querymen: {query, select, cursor}}, res, next) => {
  let queryObj = {'variants.code': params.code};
  Product.aggregate([
    {
      $match: queryObj,
    },
    {
      $project: {
        title: 1,
        code: '$variants.code',
        color: '$variants.color',
        size: '$variants.size',
        price: '$variants.price',
        inventory: '$variants.inventory',
        image: '$variants.image',
        _id: '$variants._id',
      },
    },
  ])
    .then((variant) => ({
      data: variant,
    }))
    .then(success(res))
    .catch(next);
};

const getManyByVariantCodes = ({params, querymen: {query, select, cursor}}, res, next) => {
  Product.aggregate([
    {
      $match: query, // Lọc theo điều kiện sản phẩm
    },
    {
      $unwind: '$variants', // Tách từng `variant` ra thành các document riêng lẻ
    },
    {
      $match: query, // Lọc theo điều kiện sản phẩm
    },
    {
      $project: {
        title: 1,
        code: '$variants.code',
        color: '$variants.color',
        size: '$variants.size',
        price: '$variants.price',
        inventory: '$variants.inventory',
        image: '$variants.image',
        _id: '$variants._id',
      },
    },
  ])
    .then((variants) => ({
      total: variants.length,
      data: variants,
    }))
    .then(success(res))
    .catch(next);
};

const getMyWishlist = ({user, querymen: {query, select, cursor}}, res, next) => {
  query['_id'] = {$in: user.wishList || []};
  Product.countDocuments(query)
    .lean()
    .then((total) => {
      if (!total) {
        return {data: [], total};
      }
      return Product.find(query, select, cursor).then((docs) => ({
        total,
        results: docs.length,
        data: docs.map((doc) => doc.view()),
      }));
    })
    .then(success(res))
    .catch(next);
};

module.exports = {create, index, show, update, destroy, getManyByVariantCodes, getByVariantCode, getMyWishlist};
