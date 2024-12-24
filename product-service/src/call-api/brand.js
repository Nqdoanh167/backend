/** @format */

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const brands = [
  {
    name: 'samsung',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/brand-07_131x119@2x.png?v=1655725508',
  },
  {
    name: 'apple',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/brand-01_131x119@2x.png?v=1655725508',
  },
  {
    name: 'sony',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/brand-09_131x119@2x.png?v=1655725508',
  },
  {
    name: 'lg',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/brand-06_131x119@2x.png?v=1655725508',
  },
  {
    name: 'sandisk',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/brand-08_131x119@2x.png?v=1655725508',
  },
];

module.exports = fetchBrands = brands.map((brand) => {
  const raw = JSON.stringify(brand);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8000/product-service/api/brands', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
