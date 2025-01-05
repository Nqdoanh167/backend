/** @format */

const {Router} = require('express');
const {paymentWithZalo, callbackWithZalo, checkStatusOrder} = require('./controller');
const router = new Router();

router.post('/payment', paymentWithZalo);
router.post('/callback', callbackWithZalo);
router.post('/check-status-order', checkStatusOrder);

module.exports = router;
