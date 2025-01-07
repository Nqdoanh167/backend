/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Blog, blogCreateDto, blogUpdateDto} = require('../../models/blog');
const FactoryController = require('../../../services/factory');
const router = new Router();
const {token, admin} = require('../../../services/auth');

router.post('/', admin, body(blogCreateDto), FactoryController.create(Blog));
router.get('/', query({}), FactoryController.index(Blog));
router.get('/:id', query({}), FactoryController.show(Blog));
router.delete('/:id', admin, FactoryController.destroy(Blog));
router.put('/:id', body(blogUpdateDto), FactoryController.update(Blog));

module.exports = router;
