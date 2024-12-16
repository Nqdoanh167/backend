/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/carts', require('./cart'));

module.exports = router;
