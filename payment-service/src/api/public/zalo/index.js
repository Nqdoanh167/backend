/** @format */

const {Router} = require('express');
const {paymentWithZalo, callbackWithZalo, checkStatusOrder} = require('./controller');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const router = new Router();

router.post(
  '/payment',
  body({
    amount: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
  }),
  paymentWithZalo,
);
router.post('/callback', callbackWithZalo);
router.post('/check-status-order', checkStatusOrder);

module.exports = router;
