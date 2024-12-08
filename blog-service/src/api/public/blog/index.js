/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Blog, blogCreateDto} = require('../../models/blog');
const FactoryController = require('../../../services/factory');
const router = new Router();
const {token, admin} = require('../../../services/auth');

router.post('/', token, admin, body(blogCreateDto), FactoryController.create(Blog));
router.get('/', query({}), FactoryController.index(Blog));
router.get('/:id', query({}), FactoryController.show(Blog));
router.delete('/:id', token, admin, FactoryController.destroy(Blog));

module.exports = router;
