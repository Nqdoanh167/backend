/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {userLoginDto, userRegisterDto} = require('../../models/user');
const {login, register, getToken, logout, loginAdmin} = require('./controller');
const router = new Router();

router.post('/login-admin', body(userLoginDto), loginAdmin);

router.post('/login', body(userLoginDto), login);
router.post('/register', body(userRegisterDto), register);
router.post('/get-token', getToken);
router.post('/logout', logout);

module.exports = router;
