/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/reviews', require('./review'));

module.exports = router;
