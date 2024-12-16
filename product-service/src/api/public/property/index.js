/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Property, propertyCreateDto, propertyUpdateDto} = require('../../models/property');
const FactoryController = require('../../../services/factory');
const router = new Router();

router.post('/', body(propertyCreateDto), FactoryController.create(Property));
router.get('/', query({}), FactoryController.index(Property));
router.get('/:id', query({}), FactoryController.show(Property));
router.put('/:id', body(propertyUpdateDto), FactoryController.update(Property));
router.delete('/:id', FactoryController.destroy(Property));

module.exports = router;
