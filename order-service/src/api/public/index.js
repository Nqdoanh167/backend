/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/', require('./order'));

module.exports = router;
