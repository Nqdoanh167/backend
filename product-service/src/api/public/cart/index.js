/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Cart, cartCreateDTO} = require('../../models/cart');
const FactoryController = require('../../../services/factory');
const {index, destroy} = require('./controller');
const router = new Router();

router.post('/', body(cartCreateDTO), FactoryController.create(Cart));
router.get(
  '/',
  query({
    userId: {
      type: String,
      paths: ['user_id'],
    },
  }),
  FactoryController.index(Cart),
);
router.delete('/:id', destroy);

module.exports = router;
