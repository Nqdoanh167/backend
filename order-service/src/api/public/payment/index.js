/** @format */

const {Router} = require('express');
const {createPaymentUrl} = require('./controller');
const router = new Router();

router.post('/', createPaymentUrl);

module.exports = router;
