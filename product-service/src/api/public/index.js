/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/brands', require('./brand'));
router.use('/categories', require('./category'));
router.use('/colors', require('./color'));
router.use('/sizes', require('./size'));
router.use('/products', require('./product'));

module.exports = router;
