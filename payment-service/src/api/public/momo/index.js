/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {paymentWithMomo, callbackWithMomo, checkStatusTransaction} = require('./controller');
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
  paymentWithMomo,
);
router.post('/callback', callbackWithMomo);
router.post('/check-status-transaction', checkStatusTransaction);

module.exports = router;
