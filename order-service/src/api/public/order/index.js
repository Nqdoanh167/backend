/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Order, orderCreateDTO, orderUpdateDTO} = require('../../models/order');
const FactoryController = require('../../../services/factory');
const {create, update} = require('./controller');
const {token, admin} = require('../../../services/auth');
const router = new Router();

router.post('/', body(orderCreateDTO), create);
router.get(
  '/',
  admin,
  query({
    search: {
      type: String,
      paths: ['search'],
    },
    status: {
      type: String,
      paths: ['status'],
    },
  }),
  FactoryController.index(Order),
);

router.get(
  '/get-my-orders',
  token,
  query({
    search: {
      type: String,
      paths: ['search'],
    },
    status: {
      type: String,
      paths: ['status'],
    },
  }),
  FactoryController.index(Order),
);
router.get('/:id', query({}), FactoryController.show(Order));
router.put('/:id', body(orderUpdateDTO), update);
router.delete('/:id', FactoryController.destroy(Order));

module.exports = router;
