/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Order, orderCreateDTO} = require('../../models/order');
const FactoryController = require('../../../services/factory');
const {create} = require('./controller');
const router = new Router();

router.post('/', body(orderCreateDTO), create);
router.get('/', query({}), FactoryController.index(Order));
router.get('/:id', query({}), FactoryController.show(Order));
router.delete('/:id', FactoryController.destroy(Order));

module.exports = router;
