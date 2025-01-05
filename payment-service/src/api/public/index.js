/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/zalo', require('./zalo'));
router.use('/momo', require('./momo'));

module.exports = router;
