/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/', require('./cart'));

module.exports = router;
