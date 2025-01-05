/** @format */

function generateRandomCode(prefix) {
  const randomNumber = Math.floor(100000 + Math.random() * 900000); // Tạo số ngẫu nhiên 6 chữ số
  return `${prefix}${randomNumber}`;
}

module.exports = {
  generateRandomCode,
};
