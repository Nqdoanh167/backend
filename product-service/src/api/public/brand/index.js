/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {brandCreateDto, brandUpdateDto} = require('../../models/brand');
const FactoryController = require('../../../services/factory');
const {Brand} = require('../../models/brand');
const router = new Router();

router.post('/', body(brandCreateDto), FactoryController.create(Brand));
router.get('/', query({}), FactoryController.index(Brand));
router.get('/:id', query({}), FactoryController.show(Brand));
router.put('/:id', body(brandUpdateDto), FactoryController.update(Brand));
router.delete('/:id', FactoryController.destroy(Brand));

module.exports = router;
