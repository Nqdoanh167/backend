/** @format */

const {generateCode} = require('../utils/util');

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const products = [
  {
    title: 'Tai nghe dành cho học sinh sinh viên',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    category: '671e27a677e97453ac8eaa1a',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 99000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/24_884x.jpg?v=1655098000',
      'https://demo-digitic.myshopify.com/cdn/shop/products/24-01_884x.jpg?v=1655098000',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: '#FFA500',
        size: 'S',
        price: 99000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/24_884x.jpg?v=1655098000',
      },
      {
        code: generateCode(),
        color: '#000',
        size: 'L',
        price: 120000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/24-01_884x.jpg?v=1655098000',
      },
    ],
  },
];

module.exports = fetchProducts = products.map((brand) => {
  const raw = JSON.stringify(brand);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8002/api/products', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
