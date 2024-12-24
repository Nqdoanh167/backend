/** @format */
/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {User, userCreateDto, userUpdateDto} = require('../../models/user');
const FactoryController = require('../../../services/factory');
const {updateMe, getMe} = require('./controller');
const {token} = require('../../../services/auth');
const router = new Router();

// me
router.put('/me', token, body(userUpdateDto), updateMe);
router.get('/me', token, getMe);

router.post('/', body(userCreateDto), FactoryController.create(User));
router.get('/', query({}), FactoryController.index(User));
router.get('/:id', query({}), FactoryController.show(User));
router.put('/:id', body(userUpdateDto), FactoryController.update(User));
router.delete('/:id', FactoryController.destroy(User));

module.exports = router;
