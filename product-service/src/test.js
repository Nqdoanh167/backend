/** @format */

colors = [];

variants = [
  {
    _id: 1,
    color: '#FF0000',
    size: 'S',
    price: 100000,
    imageIds: [1],
    inventory: 10,
    productId: 1,
  },
  {
    _id: 2,
    color: '#FF0000',
    size: 'L',
    price: 200000,
    imageIds: [2],
    inventory: 20,
    productId: 1,
  },
];

products = [
  {
    _id: 1,
    title: 'T-shirt',
    description: 'This is a t-shirt',
    averageRating: 4.5,
    category: 'T-shirt',
    brand: 'Nike',
    images: [
      {
        _id: 1,
        url: 'https://www.google.com',
      },
      {
        _id: 2,
        url: 'https://www.google.com',
      },
      {
        _id: 3,
        url: 'https://www.google.com',
      },
    ],
    quantity_sold: 100,
    defaultVariant: [
      {
        color: '#FF0000',
        size: 'S',
        price: 100000,
        imageIds: [1],
        inventory: 10,
      },
      {
        color: '#FF0000',
        size: 'L',
        price: 200000,
        imageIds: [2],
        inventory: 20,
      },
    ],
    variants: [
      {
        color: '#FF0000',
        size: 'S',
        price: 100000,
        imageIds: [1],
        inventory: 10,
      },
      {
        color: '#FF0000',
        size: 'L',
        price: 200000,
        imageIds: [2],
        inventory: 20,
      },
    ],
    status: 'active',
  },
];
