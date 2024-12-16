/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Cart, cartCreateDTO} = require('../../models/cart');
const FactoryController = require('../../../services/factory');
const {index, destroy, create} = require('./controller');
const {token} = require('../../../services/auth');
const router = new Router();

router.post('/', token, body(cartCreateDTO), create);
router.get('/', token, query({}), index);
router.delete('/:id', token, FactoryController.destroy(Cart));

module.exports = router;
