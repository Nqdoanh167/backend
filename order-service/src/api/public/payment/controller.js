/** @format */
const crypto = require('crypto');
const qs = require('qs');
const config = {
  vnp_TmnCode: 'TT2QUT8Z', // Mã website của bạn
  vnp_HashSecret: '1KO0LOMOIIKB1LOCDIVHFWITZTMF9HD6', // Chuỗi bí mật
  vnp_Url: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html', // URL VNPay
  vnp_ReturnUrl: 'http://localhost:3003/vnpay_return', // URL callback
};

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
}
const createPaymentUrl = (req, res, next) => {
  try {
    const date = new Date();
    const createDate =
      date.getFullYear() +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      ('0' + date.getDate()).slice(-2) +
      ('0' + date.getHours()).slice(-2) +
      ('0' + date.getMinutes()).slice(-2) +
      ('0' + date.getSeconds()).slice(-2);

    const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const orderId = Date.now(); // Mã đơn hàng
    const amount = req.body.amount || 10000; // Số tiền thanh toán
    const bankCode = ''; // Mã ngân hàng (nếu có)
    console.log({amount});

    // Các tham số gửi sang VNPay
    const params = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode: config.vnp_TmnCode,
      vnp_Locale: 'vn',
      vnp_CurrCode: 'VND',
      vnp_TxnRef: orderId,
      vnp_OrderInfo: 'Thanh toan don hang ' + orderId,
      vnp_OrderType: 'other',
      vnp_Amount: amount * 100, // VNPay nhận số tiền nhân 100
      vnp_ReturnUrl: config.vnp_ReturnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };

    // Sắp xếp tham số và tạo query string
    const sortedParams = sortObject(params);
    const signData = qs.stringify(sortedParams, {encode: false});
    const hmac = crypto.createHmac('sha512', config.vnp_HashSecret);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    sortedParams['vnp_SecureHash'] = signed;

    const paymentUrl = config.vnp_Url + '?' + qs.stringify(sortedParams, {encode: false});
    return res.redirect(paymentUrl);
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = {
  createPaymentUrl,
};
