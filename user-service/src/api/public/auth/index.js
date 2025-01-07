/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {userLoginDto, userRegisterDto} = require('../../models/user');
const {login, register, getToken, logout, loginAdmin, getAdminIds, getAdmin} = require('./controller');
const {admin} = require('../../../services/auth');
const router = new Router();

router.get('/admin', admin, getAdmin);

router.post('/login-admin', body(userLoginDto), loginAdmin);

router.post('/login', body(userLoginDto), login);
router.post('/register', body(userRegisterDto), register);
router.post('/get-token', getToken);
router.post('/logout', logout);

router.get('/admin-ids', getAdminIds);

module.exports = router;
