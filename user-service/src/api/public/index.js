/** @format */

const {Router} = require('express');
const router = new Router();
const {token} = require('../../services/auth');

router.use('/auth', require('./auth'));
router.use('/users', require('./user'));

module.exports = router;
