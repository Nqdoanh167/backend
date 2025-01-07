/** @format */

const {Types} = require('mongoose');
const generateCode = () => {
  const timestamp = Date.now().toString(); // Lấy timestamp hiện tại
  const randomDigits = Math.floor(Math.random() * 100000).toString(); // Thêm số ngẫu nhiên để tăng tính duy nhất
  return timestamp + randomDigits;
};

const isObjectId = (val) => {
  return Types.ObjectId.isValid(val) && /^[a-fA-F0-9]{24}$/.test(val);
};

module.exports = {
  generateCode,
  isObjectId,
};
