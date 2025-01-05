/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {productCreateDto, productUpdateDto} = require('../../models/product');
const {token, admin} = require('../../../services/auth');
const router = new Router();
const {create, index, show, update, destroy, getManyByVariantCodes, getMyWishlist} = require('./controller');

router.get('/my-wishlist', token, query({}), getMyWishlist);
router.post('/', body(productCreateDto), create);
router.get(
  '/',
  query({
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    status: {
      type: String,
      paths: ['status'],
    },
    search: {
      type: String,
      paths: ['search'],
    },
    ids: {
      type: Array,
      paths: ['_id'],
    },
    sort: {
      type: String,
      paths: ['createdAt'],
      default: '-createdAt',
    },
    priceFrom: {
      type: Number,
      paths: ['price'],
      operator: '$gte',
    },
    priceTo: {
      type: Number,
      paths: ['price'],
      operator: '$lte',
    },
    colors: {
      type: [String],
      paths: ['variants.color'],
    },
    sizes: {
      type: [String],
      paths: ['variants.size'],
    },
  }),
  index,
);
router.get(
  '/variants',
  query({
    codes: {
      type: [String],
      paths: ['variants.code'],
    },
  }),
  getManyByVariantCodes,
);

router.get(
  '/:slug',
  query({
    variant: {
      type: String,
    },
  }),
  show,
);

router.put('/:id', token, admin, body(productUpdateDto), update);
router.delete('/:id', token, admin, destroy);

module.exports = router;
