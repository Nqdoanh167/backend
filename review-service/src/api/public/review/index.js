/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Review, reviewCreateDto} = require('../../models/review');
const FactoryController = require('../../../services/factory');
const {admin, token} = require('../../../services/auth');
const {myReview} = require('./controller');
const router = new Router();

router.post('/', token, body(reviewCreateDto), FactoryController.create(Review));
router.get(
  '/',
  query({
    product_id: {
      type: String,
      path: ['product_id'],
    },
  }),
  FactoryController.index(Review),
);
router.get(
  '/my-review',
  token,
  query({
    product_id: {
      type: String,
      path: ['product_id'],
    },
  }),
  myReview,
);
router.delete('/:id', token, FactoryController.destroy(Review));

module.exports = router;
