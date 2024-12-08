/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/', require('./review'));

module.exports = router;
