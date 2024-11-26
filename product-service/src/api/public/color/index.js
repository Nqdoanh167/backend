/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {colorCreateDto} = require('../../models/color');
const FactoryController = require('../../../services/factory');
const {Color} = require('../../models/color');
const router = new Router();

router.post('/', body(colorCreateDto), FactoryController.create(Color));
router.get('/', query({}), FactoryController.index(Color));
router.get('/:id', query({}), FactoryController.show(Color));
router.delete('/:id', FactoryController.destroy(Color));

module.exports = router;
