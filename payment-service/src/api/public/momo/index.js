/** @format */

const {Router} = require('express');
const {paymentWithMomo, callbackWithMomo, checkStatusTransaction} = require('./controller');
const router = new Router();

router.post('/payment', paymentWithMomo);
router.post('/callback', callbackWithMomo);
router.post('/check-status-transaction', checkStatusTransaction);

module.exports = router;
