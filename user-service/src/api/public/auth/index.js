/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {userLoginDto, userRegisterDto} = require('../../models/user');
const {login, register} = require('./controller');
const router = new Router();

router.post('/login', body(userLoginDto), login);
router.post('/register', body(userRegisterDto), register);

module.exports = router;
