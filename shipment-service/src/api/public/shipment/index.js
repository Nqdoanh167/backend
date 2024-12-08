/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Review, reviewCreateDto} = require('../../models/review');
const FactoryController = require('../../../services/factory');
const {admin} = require('../../../services/auth');
const {showOfMe} = require('./controller');
const router = new Router();

router.post('/', body(reviewCreateDto), FactoryController.create(Review));
router.get(
  '/',
  admin,
  query({
    product_id: {
      type: String,
      path: ['product_id'],
    },
  }),
  FactoryController.index(Review),
);
router.get(
  '/me',
  query({
    product_id: {
      type: String,
      path: ['product_id'],
    },
  }),
  showOfMe,
);
router.delete('/:id', FactoryController.destroy(Review));

module.exports = router;
