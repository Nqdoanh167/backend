/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {categoryCreateDto, categoryUpdateDto} = require('../../models/category');
const FactoryController = require('../../../services/factory');
const {Category} = require('../../models/category');
const {index} = require('./controller');
const router = new Router();

router.post('/', body(categoryCreateDto), FactoryController.create(Category));
router.get('/', query({}), index);
router.get('/:id', query({}), FactoryController.show(Category));
router.put('/:id', body(categoryUpdateDto), FactoryController.update(Category));
router.delete('/:id', FactoryController.destroy(Category));

module.exports = router;
