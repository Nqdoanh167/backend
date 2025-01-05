/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/brands', require('./brand'));
router.use('/categories', require('./category'));
router.use('/products', require('./product'));
router.use('/properties', require('./property'));

module.exports = router;
