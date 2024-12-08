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
  {
    title: 'Kids headphones bulk 10 pack multi colored for students',
    description: 'Kids headphones bulk 10 pack multi colored for students',
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
  {
    title: 'Olympus pen E-PL9 kit with 14-42, EZ lens, camera',
    description: 'Olympus pen E-PL9 kit with 14-42, EZ lens, camera',
    category: 'Cameras & Videos',
    brand: 'sony',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/19_260x.jpg?v=1655097254',
      'https://demo-digitic.myshopify.com/cdn/shop/products/19_00_260x.jpg?v=1655097265',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: '#0000FF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/19_260x.jpg?v=1655097254',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/19_00_260x.jpg?v=1655097265',
      },
    ],
  },
  {
    title: 'Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+3G Tablet',
    description: 'Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+3G Tablet',
    category: 'Mobiles & tablets',
    brand: 'apple',
    price: 90000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_260x.jpg?v=1655096645',
      'https://demo-digitic.myshopify.com/cdn/shop/products/15_00_260x.jpg?v=1655096656',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: '0000FF',
        size: 'S',
        price: 90000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_260x.jpg?v=1655096645',
      },
      {
        code: generateCode(),
        color: '808080',
        size: 'M',
        price: 100000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_260x.jpg?v=1655096645',
      },
      {
        code: generateCode(),
        color: 'FFC0CB',
        size: 'L',
        price: 120000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/15_00_260x.jpg?v=1655096656',
      },
    ],
  },
  {
    title: 'Beoplay A1 Portable Bluetooth Speaker with Microphone',
    description: 'Beoplay A1 Portable Bluetooth Speaker with Microphone',
    category: 'Music & Gaming',
    brand: 'sony',
    price: 50000,
    entryPrice: 45000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/12_260x.jpg?v=1655096377',
      'https://demo-digitic.myshopify.com/cdn/shop/products/12_00_260x.jpg?v=1655096387',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: '008000', //xanh
        size: 'S',
        price: 50000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_260x.jpg?v=1655096377',
      },
      {
        code: generateCode(),
        color: '808080', //xám
        size: 'S',
        price: 55000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_260x.jpg?v=1655096377',
      },
      {
        code: generateCode(),
        color: '#000000', //đen
        size: 'L',
        price: 50000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_00_260x.jpg?v=1655096387',
      },
    ],
  },
  {
    title: 'Milanese Loop Watch Band for 42mm/44mm Apple Watch',
    description: 'Milanese Loop Watch Band for 42mm/44mm Apple Watch',
    category: 'Smartwatches',
    brand: 'apple',
    price: 90000,
    entryPrice: 85000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/09_260x.jpg?v=1655095977',
      'https://demo-digitic.myshopify.com/cdn/shop/products/09_00_260x.jpg?v=1655095991',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: '000000',
        size: 'S',
        price: 90000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_260x.jpg?v=1655095977',
      },
      {
        code: generateCode(),
        color: 'FFFFFF',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products09_00_260x.jpg?v=1655095991',
      },
    ],
  },
  {
    title: 'Apple AirPods Max 2020 with Smart Case – Blue',
    description: 'Apple AirPods Max 2020 with Smart Case – Blue',
    category: 'Headphones',
    brand: 'apple',
    price: 120000,
    entryPrice: 100000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/06_1f4f68e8-e872-4bbc-b9f1-9b86af764a1d_260x.jpg?v=1655095456',
      'https://demo-digitic.myshopify.com/cdn/shop/products/06_00_260x.jpg?v=1655095464',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: 'FF0000',
        size: 'S',
        price: 120000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/06_1f4f68e8-e872-4bbc-b9f1-9b86af764a1d_260x.jpg?v=1655095456',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 120000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/06_00_260x.jpg?v=1655095464',
      },
    ],
  },
  {
    title: 'Samsung Galaxy Note10+ Mobile Phone; Sim Free Smartphone',
    description: 'Samsung Galaxy Note10+ Mobile Phone; Sim Free Smartphone',
    category: 'Mobiles & tablets',
    brand: 'samsung',
    price: 88000,
    entryPrice: 80000,
    images: ['https://demo-digitic.myshopify.com/cdn/shop/products/01_287x.jpg?v=1655094851'],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/01_287x.jpg?v=1655094851',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/01_287x.jpg?v=1655094851',
      },
    ],
  },
  {
    title: 'Samsung Galaxy Tab A SM-T295, 4G Factory Unlocked',
    description: 'Samsung Galaxy Tab A SM-T295, 4G Factory Unlocked',
    category: 'Mobiles & tablets',
    brand: 'samsung',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/4_1dd5e4d2-861f-4f8e-8d28-28f5934a7e13_287x.jpg?v=1655095076',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: '000000',
        size: 'S',
        price: 88000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/4_1dd5e4d2-861f-4f8e-8d28-28f5934a7e13_287x.jpg?v=1655095076',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/4_1dd5e4d2-861f-4f8e-8d28-28f5934a7e13_287x.jpg?v=1655095076',
      },
    ],
  },
  {
    title: 'New Upgraded 2K 1080P Streaming Webcam with Ring Light',
    description: 'New Upgraded 2K 1080P Streaming Webcam with Ring Light',
    category: 'Cameras & Videos',
    brand: '',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/16_652x.jpg?v=1655096743',
      'https://demo-digitic.myshopify.com/cdn/shop/products/16_00_652x.jpg?v=1655096752',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/16_652x.jpg?v=1655096743',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/16_00_652x.jpg?v=1655096752',
      },
    ],
  },
  {
    title: 'Hero Session Action Camera with 8MP Photos',
    description: 'Hero Session Action Camera with 8MP Photos',
    category: 'Cameras & Videos',
    brand: 'sony',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/05_652x.jpg?v=1655095813',
      'https://demo-digitic.myshopify.com/cdn/shop/products/05_00_652x.jpg?v=1655095821',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/05_652x.jpg?v=1655095813',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/05_00_652x.jpg?v=1655095821',
      },
    ],
  },
  {
    title: 'Samsung Galaxy A23 128GB 6GB RAM Purple Color',
    description: 'Samsung Galaxy A23 128GB 6GB RAM Purple Color',
    category: 'Mobiles & tablets',
    brand: 'samsung',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/17_652x.jpg?v=1655096912',
      'https://demo-digitic.myshopify.com/cdn/shop/products/17_00_652x.jpg?v=1655096924',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/17_652x.jpg?v=1655096912',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/17_00_652x.jpg?v=1655096924',
      },
    ],
  },
  {
    title: 'Smart Watch for Android iPhone, Bluetooth Phone Calls',
    description: 'Smart Watch for Android iPhone, Bluetooth Phone Calls',
    category: 'Mobiles & tablets',
    brand: 'apple',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/07_652x.jpg?v=1655095215',
      'https://demo-digitic.myshopify.com/cdn/shop/products/07_00_652x.jpg?v=1655095223',
    ],
    status: 'active',
    variants: [
      {
        code: generateCode(),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_652x.jpg?v=1655095215',
      },
      {
        code: generateCode(),
        color: '#000000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_00_652x.jpg?v=1655095223',
      },
    ],
  },
];

module.exports = fetchProduct = products.map((product) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3NDFlYTg0NzdmYjRiYzg0NWE0YzJiYyIsImVtYWlsIjoibnFkY250dDIwMDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkYkh5SGNwV3pkVHU5Mm8yUmNFN09OdWlxR01SRW9iY3BJdEZZUWFqbFh0SmpHU0I3TXNCcDYiLCJyb2xlIjoiYWRtaW4iLCJkYXRlX2pvaW5lZCI6IjIwMjQtMTEtMjNUMTQ6NDU6MjQuNjg0WiIsImNyZWF0ZWRBdCI6IjIwMjQtMTEtMjNUMTQ6NDU6MjQuNjg3WiIsInVwZGF0ZWRBdCI6IjIwMjQtMTEtMjhUMTU6NDI6MzkuNzAwWiIsIl9fdiI6MCwiYWRkcmVzcyI6IjI3NiBLaMawxqFuZyBUcnVuZyIsIm5hbWUiOiJBZG1pbiIsInRlbGVwaG9uZU51bWJlciI6IjA5MTI3NDYyMyJ9LCJpYXQiOjE3MzI4NTAxMDcsImV4cCI6MTczNTQ0MjEwN30.SRyQvzUHAE5AksGLiCl_rldt6_OiavGFWqTJIvDjoSk',
  );

  const raw = JSON.stringify(product);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:8000/product-service/api/products', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
