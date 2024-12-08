/** @format */

const generateCode = () => {
  const timestamp = Date.now().toString(); // Lấy timestamp hiện tại
  const randomDigits = Math.floor(Math.random() * 100000).toString(); // Thêm số ngẫu nhiên để tăng tính duy nhất
  return timestamp + randomDigits;
};

module.exports = {
  generateCode,
};
