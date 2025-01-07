/** @format */

const axios = require('axios').default;
const CryptoJS = require('crypto-js');
const moment = require('moment');
const qs = require('qs');
const orderService = require('../../../services/axios/order');
const {port_ngrok} = require('../../../config');

const config = {
  app_id: '2553',
  key1: 'PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL',
  key2: 'kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz',
  endpoint: 'https://sb-openapi.zalopay.vn/v2/create',
};

/**
 * methed: POST
 * Sandbox	POST	https://sb-openapi.zalopay.vn/v2/create
 * Real	POST	https://openapi.zalopay.vn/v2/create
 * description: tạo đơn hàng, thanh toán
 */
const paymentWithZalo = async ({bodymen: {body}}, res) => {
  const {amount, orderId} = body;

  const embed_data = {
    redirecturl: 'http://localhost:3003/checkout',
  };

  const items = [];
  const order = {
    app_id: config.app_id,
    app_trans_id: `${moment().format('YYMMDD')}_${orderId}`,
    app_user: 'user123',
    app_time: Date.now(),
    item: JSON.stringify(items),
    embed_data: JSON.stringify(embed_data),
    amount,
    callback_url: `${port_ngrok}/api/zalo/callback`,
    description: `D-SHOP - Payment for the order #${orderId}`,
    bank_code: '',
  };

  const data =
    config.app_id +
    '|' +
    order.app_trans_id +
    '|' +
    order.app_user +
    '|' +
    order.amount +
    '|' +
    order.app_time +
    '|' +
    order.embed_data +
    '|' +
    order.item;
  order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

  try {
    const result = await axios.post(config.endpoint, null, {params: order});

    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
  }
};

const callbackWithZalo = async (req, res) => {
  let result = {};

  const data = JSON.parse(req.body.data);
  const {amount} = data;

  try {
    let dataStr = req.body.data;
    let reqMac = req.body.mac;

    let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();

    // kiểm tra callback hợp lệ (đến từ ZaloPay server)
    if (reqMac !== mac) {
      // callback không hợp lệ
      result.return_code = -1;
      result.return_message = 'mac not equal';
    } else {
      // thanh toán thành công
      // merchant cập nhật trạng thái cho đơn hàng ở đây
      let dataJson = JSON.parse(dataStr, config.key2);

      result.return_code = 1;
      result.return_message = 'success';

      const orderId = dataJson['app_trans_id'].split('_')[1];
      await orderService.updateOne({
        method: 'updateOneOrder',
        query: {_id: orderId},
        data: {
          totalAmountAwaitPaid: 0,
          totalAmountPaid: amount,
          payment_type: 'zalo',
        },
      });
    }
  } catch (ex) {
    console.log('lỗi:::' + ex.message);
    result.return_code = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
    result.return_message = ex.message;
  }

  // thông báo kết quả cho ZaloPay server
  res.json(result);
};

const checkStatusOrder = async (req, res) => {
  const {app_trans_id} = req.body;

  let postData = {
    app_id: config.app_id,
    app_trans_id, // Input your app_trans_id
  };

  let data = postData.app_id + '|' + postData.app_trans_id + '|' + config.key1; // appid|app_trans_id|key1
  postData.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

  let postConfig = {
    method: 'post',
    url: 'https://sb-openapi.zalopay.vn/v2/query',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(postData),
  };

  try {
    const result = await axios(postConfig);
    console.log(result.data);
    return res.status(200).json(result.data);
    /**
     * kết quả mẫu
      {
        "return_code": 1, // 1 : Thành công, 2 : Thất bại, 3 : Đơn hàng chưa thanh toán hoặc giao dịch đang xử lý
        "return_message": "",
        "sub_return_code": 1,
        "sub_return_message": "",
        "is_processing": false,
        "amount": 50000,
        "zp_trans_id": 240331000000175,
        "server_time": 1711857138483,
        "discount_amount": 0
      }
    */
  } catch (error) {
    console.log('lỗi');
    console.log(error);
  }
};

module.exports = {
  paymentWithZalo,
  callbackWithZalo,
  checkStatusOrder,
};
