/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {productCreateDto, productUpdateDto} = require('../../models/product');
const router = new Router();
const {create, index, show, update, destroy, getManyByVariantCodes, getByVariantCode} = require('./controller');

router.post('/', body(productCreateDto), create);
router.get(
  '/',
  query({
    status: {
      type: String,
      paths: ['status'],
      default: 'active',
    },
  }),
  index,
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
// router.get('/variants/:code', getByVariantCode);
router.get(
  '/variants/codes',
  query({
    codes: {
      type: [String],
      paths: ['variants.code'],
    },
  }),
  getManyByVariantCodes,
);
router.put('/:id', body(productUpdateDto), update);
router.delete('/:id', destroy);

module.exports = router;
