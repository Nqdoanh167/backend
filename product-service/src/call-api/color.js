/** @format */

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const colors = [
  '#FF0000', // Đỏ
  '#0000FF', // Xanh dương
  '#008000', // Xanh lá cây
  '#000000', // Đen
  '#FFFFFF', // Trắng
  '#FFFF00', // Vàng
  '#800080', // Tím
  '#FFA500', // Cam
  '#FFC0CB', // Hồng
  '#A52A2A', // Nâu
  '#808080', // Xám
  '#C0C0C0', // Bạc
  '#FFD700', // Vàng kim
  '#F5F5DC', // Be
  '#800000', // Nâu đậm
  '#000080', // Xanh đậm
  '#008080', // Xanh lục lam
  '#808000', // Ô liu
  '#00FFFF', // Xanh lơ
  '#FF00FF', // Đỏ thắm
];

module.exports = fetchColor = colors.map((color) => {
  const raw = JSON.stringify({
    color_code: color,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8386/api/product-service/colors', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
