/** @format */

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const categories = [
  {
    name: 'Computers & Laptop',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/02_110x110.jpg?v=1654929897',
  },
  {
    name: 'Cameras & Videos',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/products/03_110x110.jpg?v=1655095694',
  },
  {
    name: 'Smart Television',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/04_110x110.jpg?v=1654929951',
  },
  {
    name: 'Smartwatches',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/products/05_110x110.jpg?v=1655095813',
  },
  {
    name: 'Music & Gaming',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/files/06_110x110.jpg?v=1654930029',
  },
  {
    name: 'Mobiles & tablets',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/products/01_110x110.jpg?v=1655094851',
  },
  {
    name: 'Headphones',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_110x110.jpg?v=1655095215',
  },
  {
    name: 'Accessories',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/products/08_110x110.jpg?v=1655095351',
  },
  {
    name: 'Portable Speakers',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_110x110.jpg?v=1655095977',
  },
  {
    name: 'Home Appliances',
    thumbnail: 'https://demo-digitic.myshopify.com/cdn/shop/products/10_110x110.jpg?v=1655096098',
  },
];

module.exports = fetchcategorys = categories.map((category) => {
  const raw = JSON.stringify(category);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8000/product-service/api/categories', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
