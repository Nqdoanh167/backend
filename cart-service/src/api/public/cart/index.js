/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Cart, cartCreateDTO} = require('../../models/cart');
const FactoryController = require('../../../services/factory');
const {index, destroy, create} = require('./controller');
const router = new Router();

router.post('/', body(cartCreateDTO), create);
router.get('/', query({}), index);
router.delete('/:id', FactoryController.destroy(Cart));

module.exports = router;
