/** @format */
/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {User, userCreateDto, userUpdateDto} = require('../../models/user');
const FactoryController = require('../../../services/factory');
const router = new Router();

router.post('/', body(userCreateDto), FactoryController.create(User));
router.get('/', query({}), FactoryController.index(User));
router.get('/:id', query({}), FactoryController.show(User));
router.put('/:id', body(userUpdateDto), FactoryController.update(User));
router.delete('/:id', FactoryController.destroy(User));

// me

router.put('/me', body(userUpdateDto), FactoryController.update(User));

module.exports = router;
