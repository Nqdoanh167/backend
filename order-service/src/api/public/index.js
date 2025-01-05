/** @format */

const {Router} = require('express');
const {token} = require('../../services/auth');
const router = new Router();

router.use('/orders', token, require('./order'));
router.use('/statuses', require('./status'));

module.exports = router;
