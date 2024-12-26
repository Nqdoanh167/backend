/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Order, orderCreateDTO, orderUpdateDTO} = require('../../models/order');
const FactoryController = require('../../../services/factory');
const {create, update} = require('./controller');
const router = new Router();

router.post('/', body(orderCreateDTO), create);
router.get(
  '/',
  query({
    limit: {
      type: String,
      default: 20,
    },
    page: {
      type: String,
      default: 1,
    },
    search: {
      type: String,
      paths: ['search'],
    },
    status: {
      type: String,
      paths: ['status'],
    },

    price: {
      type: Array,
      paths: ['items.price'],
    },
    color: {
      type: Array,
      paths: ['items.color'],
    },
    size: {
      type: Array,
      paths: ['items.size'],
    },
    'price.from': {
      type: Number,
      paths: ['items.price'],
      operator: '$gte',
    },
    'price.to': {
      type: Number,
      paths: ['items.price'],
      operator: '$lte',
    },
    color: {
      type: Array,
      paths: ['items.color'],
    },
    size: {
      type: Array,
      paths: ['items.size'],
    },
  }),
  FactoryController.index(Order),
);
router.get('/:id', query({}), FactoryController.show(Order));
router.put('/:id', body(orderUpdateDTO), update);
router.delete('/:id', FactoryController.destroy(Order));

module.exports = router;
