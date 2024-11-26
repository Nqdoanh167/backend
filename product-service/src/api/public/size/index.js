/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {sizeCreateDto} = require('../../models/size');
const FactoryController = require('../../../services/factory');
const {Size} = require('../../models/size');
const router = new Router();

router.post('/', body(sizeCreateDto), FactoryController.create(Size));
router.get('/', query({}), FactoryController.index(Size));
router.get('/:id', query({}), FactoryController.show(Size));
router.delete('/:id', FactoryController.destroy(Size));

module.exports = router;
