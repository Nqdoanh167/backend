/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Carrier, carrierCreateDto} = require('../../models/carrier');
const FactoryController = require('../../../services/factory');
const {admin, token} = require('../../../services/auth');
const router = new Router();

router.post('/', token, body(carrierCreateDto), FactoryController.create(Carrier));
router.get('/', query({}), FactoryController.index(Carrier));
router.put('/:id', token, body(carrierCreateDto), FactoryController.update(Carrier));
router.delete('/:id', token, FactoryController.destroy(Carrier));

module.exports = router;
