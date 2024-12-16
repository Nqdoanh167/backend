/** @format */

const generateCode = () => {
  const timestamp = Date.now().toString(); // Lấy timestamp hiện tại
  const randomDigits = Math.floor(Math.random() * 100000).toString(); // Thêm số ngẫu nhiên để tăng tính duy nhất
  return timestamp + randomDigits;
};

function generateOrderCode() {
  const prefix = 'DH';
  const randomNumber = Math.floor(100000 + Math.random() * 900000); // Tạo số ngẫu nhiên có 6 chữ số
  return `${prefix}${randomNumber}`;
}

module.exports = {
  generateCode,
  generateOrderCode,
};
