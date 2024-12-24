/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Status, statusCreateModel, statusOrderUpdateModel} = require('../../models/status');
const FactoryController = require('../../../services/factory');
const router = new Router();
const {token, admin} = require('../../../services/auth');

router.post('/', token, admin, body(statusCreateModel), FactoryController.create(Status));
router.get('/', query({}), FactoryController.index(Status));
router.get('/:id', query({}), FactoryController.show(Status));
router.delete('/:id', token, admin, FactoryController.destroy(Status));
router.put('/:id', token, admin, body(statusOrderUpdateModel), FactoryController.update(Status));

module.exports = router;
