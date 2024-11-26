/** @format */

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const sizes = [
  'XS', // Extra Small
  'S', // Small
  'M', // Medium
  'L', // Large
  'XL', // Extra Large
  'XXL', // Double Extra Large
  'XXXL', // Triple Extra Large
];

module.exports = fetchSize = sizes.map((size) => {
  const raw = JSON.stringify({
    size_code: size,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8386/api/product-service/sizes', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
