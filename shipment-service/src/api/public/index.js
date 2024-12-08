/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/', require('./shipment'));

module.exports = router;
