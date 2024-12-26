/** @format */

const {generateRandomCode} = require('../utils/util');
const {authToken} = require('../config');

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const products = [
  {
    title: 'Tai nghe bulk 10',
    description: 'Tai nghe bulk 10 nhiều màu sắc',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 99000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/24_884x.jpg?v=1655098000',
      'https://demo-digitic.myshopify.com/cdn/shop/products/24-02_884x.jpg?v=1655098000',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 99000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/24-01_884x.jpg?v=1655098000',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 120000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/24-02_884x.jpg?v=1655098000',
      },
    ],
  },
  {
    title: 'Máy chụp ảnh Olympus pen E-PL9 ',
    description: 'Máy chụp ảnh Olympus pen E-PL9',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/19_00_884x.jpg?v=1655097265',
      'https://demo-digitic.myshopify.com/cdn/shop/products/19_884x.jpg?v=1655097254',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#000000',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/19_00_884x.jpg?v=1655097265',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#000080',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/19_884x.jpg?v=1655097254',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#FFC0CB',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/19_02_884x.jpg?v=1655097264',
      },
    ],
  },
  {
    title: 'Máy tính bảng Honor T1 7.0 ',
    description:
      'Máy tính bảng Honor T1 7.0. Dung lượng RAM: 1GB  Dung lượng ROM: 8GB ROM Màn hình: 7 inch. Kết nối Wi-Fi+3G',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 90000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_260x.jpg?v=1655096645',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 90000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_260x.jpg?v=1655096645',
      },
    ],
  },
  {
    title: 'Loa Bluetooth Beoplay A1 ',
    description: 'Beoplay A1 có thiết kế nhỏ gọn, chắc chắn, chất lượng âm thanh tuyệt vời và có microphone tích hợp',
    category: '671e27a677e97453ac8eaa1a',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 50000,
    entryPrice: 45000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/12_260x.jpg?v=1655096377',
      'https://demo-digitic.myshopify.com/cdn/shop/products/12_00_260x.jpg?v=1655096387',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '008000', //xanh
        size: 'S',
        price: 50000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_260x.jpg?v=1655096377',
      },
      {
        code: generateRandomCode('SKU'),
        color: '808080', //xám
        size: 'S',
        price: 55000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_00_884x.jpg?v=1655096387',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#000000', //đen
        size: 'L',
        price: 50000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_01_884x.jpg?v=1655096387',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Milanese Loop',
    description: 'Đồng hồ thông minh Milanese Loop có nhiều màu sắc',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 90000,
    entryPrice: 85000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/09_00_884x.jpg?v=1655095991',
      'https://demo-digitic.myshopify.com/cdn/shop/products/09_01_884x.jpg?v=1655095991',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FFC0CB',
        size: 'S',
        price: 90000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_01_884x.jpg?v=1655095991',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#FFC0CB',
        size: 'L',
        price: 100000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_01_884x.jpg?v=1655095991',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 90000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_00_884x.jpg?v=1655095991',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'L',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_00_884x.jpg?v=1655095991',
      },
    ],
  },
  {
    title: 'Tai nghe Apple Max 2020',
    description: 'Tai nghe Apple Max 2020 chất liệU cao cấp',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 120000,
    entryPrice: 100000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/06_00_884x.jpg?v=1655095464',
      'https://demo-digitic.myshopify.com/cdn/shop/products/06_02_884x.jpg?v=1655095464',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FFFFFF',
        size: 'S',
        price: 120000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/06_02_884x.jpg?v=1655095464',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#000000',
        size: 'L',
        price: 120000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/06_00_884x.jpg?v=1655095464',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy Note10+',
    description: 'Điện thoại Samsung Galaxy Note10+ là chiếc điện thoại thông minh nhiều chức năng',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/01_00_884x.jpg?v=1655094859',
      'https://demo-digitic.myshopify.com/cdn/shop/products/01_01_884x.jpg?v=1655094859',
      'https://demo-digitic.myshopify.com/cdn/shop/products/01_02_884x.jpg?v=1655094859',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/01_00_884x.jpg?v=1655094859',
      },
    ],
  },
  {
    title: 'Samsung Galaxy Tab A SM-T295, 4G Factory Unlocked',
    description: 'Samsung Galaxy Tab A SM-T295, 4G Factory Unlocked',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/04_00_884x.jpg?v=1655095087',
      'https://demo-digitic.myshopify.com/cdn/shop/products/04_01_884x.jpg?v=1655095087',
      'https://demo-digitic.myshopify.com/cdn/shop/products/04_02_884x.jpg?v=1655095087',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/04_00_884x.jpg?v=1655095087',
      },
    ],
  },
  {
    title: 'Camera giám sát 2K',
    description: 'Camera giám sát mới được nâng cấp độ phân giải 2k cho hình ảnh sắc nét',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/16_00_884x.jpg?v=1655096752',
      'https://demo-digitic.myshopify.com/cdn/shop/products/16_01_884x.jpg?v=1655096752',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/16_652x.jpg?v=1655096743',
      },
    ],
  },
  {
    title: 'Máy chụp ảnh Hero Session Action ',
    description: 'Máy chụp ảnh Hero Session Action cho ra chất lưỢng ảnh tốt',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/05_884x.jpg?v=1655095813',
      'https://demo-digitic.myshopify.com/cdn/shop/products/05_00_884x.jpg?v=1655095821',
      'https://demo-digitic.myshopify.com/cdn/shop/products/05_01_884x.jpg?v=1655095821',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'S',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/05_652x.jpg?v=1655095813',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'L',
        price: 100000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/05_652x.jpg?v=1655095813',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy A23 ',
    description: 'Samsung Galaxy A23 có dung lượng RAM:6GB dung lượng bộ nhớ: 128GB',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/17_884x.jpg?v=1655096912',
      'https://demo-digitic.myshopify.com/cdn/shop/products/17_00_884x.jpg?v=1655096924',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#800080',

        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/17_652x.jpg?v=1655096912',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',

        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/17_00_652x.jpg?v=1655096924',
      },
    ],
  },
  {
    title: 'Điện thoại Iphone 13 ',
    description: 'Điện thoại Iphone 13',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/07_00_884x.jpg?v=1655095223',
      'https://demo-digitic.myshopify.com/cdn/shop/products/07_03_884x.jpg?v=1655095223',
      'https://demo-digitic.myshopify.com/cdn/shop/products/07_02_884x.jpg?v=1655095224',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',

        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_00_884x.jpg?v=1655095223',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#FFC0CB',

        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_03_884x.jpg?v=1655095223',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#000080',

        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_02_884x.jpg?v=1655095224',
      },
    ],
  },
  {
    title: 'Laptop Apple MacBook Air Laptop M1',
    description: 'Laptop Apple MacBook Air Laptop M1 với chip công nghệ cao, màn hình 13.3 inch',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/02_81b35a28-42fc-4d51-a8e1-48d2c061e3ed_884x.jpg?v=1655095599',
      'https://demo-digitic.myshopify.com/cdn/shop/products/02_00_884x.jpg?v=1655095610',
      'https://demo-digitic.myshopify.com/cdn/shop/products/02_01_884x.jpg?v=1655095612',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 88000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/02_81b35a28-42fc-4d51-a8e1-48d2c061e3ed_884x.jpg?v=1655095599',
      },
    ],
  },
  {
    title: 'Màn hình Dell S27QC',
    description: 'Màn hình S27QC độ phân giải 4K',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 88000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/08_884x.jpg?v=1655095351',
      'https://demo-digitic.myshopify.com/cdn/shop/products/08_00_884x.jpg?v=1655095360',
      'https://demo-digitic.myshopify.com/cdn/shop/products/08_01_884x.jpg?v=1655095360',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 88000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/08_884x.jpg?v=1655095351',
      },
    ],
  },
  {
    title: 'Loa Bluetooth Sony EXTRA BASS',
    description: 'Loa Bluetooth Sony EXTRA BASS',
    category: '6762e1c0bc48cddc1df5af8e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 1200000,
    entryPrice: 100000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/03_884x.jpg?v=1655095694',
      'https://demo-digitic.myshopify.com/cdn/shop/products/03_00_884x.jpg?v=1655095707',
      'https://demo-digitic.myshopify.com/cdn/shop/products/03_01_884x.jpg?v=1655095707',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 120000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/03_884x.jpg?v=1655095694',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 120000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/03_00_884x.jpg?v=1655095707',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000080',
        price: 120000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/03_01_884x.jpg?v=1655095707',
      },
    ],
  },
  {
    title: 'Vòng tay thông minh Samsung Galaxy Fit3',
    description:
      'Sau 3 năm chờ đợi, người hâm mộ Samsung đã có thể chào đón phiên bản kế nhiệm của smartband Galaxy Fit2 mang tên Samsung Galaxy Fit3. Chiếc vòng tay thông minh này hứa hẹn mang đến trải nghiệm ấn tượng với thiết kế thời trang, nhiều tính năng theo dõi sức khỏe và luyện tập thể thao tiên tiến, cùng thời lượng pin đáp ứng nhu cầu sử dụng cơ bản.',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 1500000,
    entryPrice: 1190000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/7077/321616/samsung-galaxy-fit3-hong-hc-10-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/7077/321616/samsung-galaxy-fit3-hong-hc-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/7077/321616/samsung-galaxy-fit3-hong-hc-8-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        size: 'S',
        price: 1500000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/321616/samsung-galaxy-fit3-hong-hc-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        size: 'L',
        price: 1500000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/321616/samsung-galaxy-fit3-hong-hc-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Samsung Galaxy Watch5 40mm',
    description:
      'Đồng hồ Galaxy Watch5 không có nhiều thay đổi về mặt thiết kế so với thế hệ trước, vẫn là mặt đồng hồ tròn được vát phẳng hài hòa kết hợp khung viền hợp kim nhôm cứng cáp, tạo cảm giác năng động cùng sự hiện đại khi đeo trên tay. Samsung cũng đã thay thế chất liệu kính cường lực bằng kính Sapphire cho thế hệ Watch5 giúp tăng độ cứng cáp cho màn hình, hạn chế nứt vỡ, trầy xước trong quá trình sử dụng',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 1200000,
    entryPrice: 1000000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/7077/284932/samsung-galaxy-watch-5-40-mm-bac-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/7077/284932/samsung-galaxy-watch-5-40-mm-bac-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/7077/284932/samsung-galaxy-watch-5-40-mm-bac-4-1-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 1200000,
        size: 'S',
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/284932/samsung-galaxy-watch-5-40-mm-bac-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 1220000,
        size: 'L',
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/284932/samsung-galaxy-watch-5-40-mm-bac-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Samsung Galaxy Watch6 44mm',
    description:
      'Kiểu dáng hiện đại, thoải mái khi đeo. Về ngoại hình thì Samsung Galaxy Watch6 chỉ có vài thay đổi nhỏ, phần mặt đồng hồ vẫn là dạng hình tròn quen thuộc. Kích thước 44 mm vừa vặn với nhiều cổ tay của người dùng. Khung viền của mặt đồng hồ được làm bằng chất liệu hợp kim nhôm bền chắc và tạo nên vẻ ngoài cao cấp, sang trọng.',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 1500000,
    entryPrice: 1200000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/7077/310850/samsung-galaxy-watch6-44mm-bac-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/7077/310850/samsung-galaxy-watch6-44mm-bac-3-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/7077/310850/samsung-galaxy-watch6-44mm-bac-2-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'C0C0C0',
        size: 'S',
        price: 1500000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/310850/samsung-galaxy-watch6-44mm-bac-2-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'C0C0C0',
        size: 'L',
        price: 1550000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/310850/samsung-galaxy-watch6-44mm-bac-2-750x500.jpg',
      },
    ],
  },
  {
    title: 'Apple Watch Series 10 GPS + Cellular 42mm viền nhôm dây thể thao',
    description:
      ' Apple Watch Series 10 GPS + Cellular 42mm - một chiếc đồng hồ thông minh được thiết kế đặc biệt cho những người quan tâm đến sức khỏe. Với màn hình lớn và sáng, bạn có thể dễ dàng đọc tin nhắn, kiểm tra email ngay trên cổ tay. Thiết bị này còn giúp bạn theo dõi nhịp tim, giấc ngủ và trợ lý giọng nói. Hứa hẹn đem đến sự hỗ trợ tốt nhất cho cuộc sống của bạn.',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 15490000,
    entryPrice: 13490000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329156/apple-watch-s10-hong-1-638616619846984279-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329156/apple-watch-s10-hong-2-638616619834485958-750x500.jpg',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        size: 'S',
        price: 15490000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329156/apple-watch-s10-hong-1-638616619846984279-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        size: 'L',
        price: 15990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329156/apple-watch-s10-hong-1-638616619846984279-750x500.jpg',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Apple Watch SE 2 GPS + Cellular 44mm viền nhôm dây thể thao',
    description:
      'Sở hữu thiết kế hiện đại, đầy đủ các tính năng sức khỏe, chế độ luyện tập đa dạng, hệ điều hành phiên bản mới thêm nhiều tiện ích hơn, giao diện thân thiện với người dùng,... chiếc Apple Watch SE 2023 GPS + Cellular 44mm viền nhôm dây thể thao sẽ sẵn sàng đồng hành cùng bạn trong mọi hoạt động thường nhật.',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 15990000,
    entryPrice: 14990000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/7077/316009/apple-watch-se-lte-2023-vien-nhom-day-silicone-den-1-638671135057663737-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/7077/316009/apple-watch-se-lte-2023-vien-nhom-day-silicone-den-3-638671135074891455-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/7077/316009/apple-watch-se-lte-2023-vien-nhom-day-silicone-den-2-638671135064943214-700x467.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 15990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/7077/316009/apple-watch-se-lte-2023-vien-nhom-day-silicone-den-2-638671135064943214-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 15990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/7077/316009/apple-watch-se-lte-2023-vien-nhom-day-silicone-den-2-638671135064943214-700x467.jpg',
      },
    ],
  },
  {
    title: 'Apple Watch Ultra 2 GPS + Cellular 49mm viền Titanium đen dây Alpine',
    description:
      'Apple Watch Ultra 2 được trang bị vi xử lý Apple S9 mới, với hiệu suất vượt trội và khả năng xử lý thông tin nhanh chóng. Chip mới này có hơn 60% bóng bán dẫn so với thế hệ trước, giúp đồng hồ thực hiện các tác vụ mượt mà hơn.',

    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 21990000,
    entryPrice: 21000000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329719/apple-watch-ultra-2-lte-49mm-vien-titanium-day-alpine-1-638616632586155895-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329719/apple-watch-ultra-2-lte-49mm-vien-titanium-day-alpine-2-638616632592285618-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329719/apple-watch-ultra-2-lte-49mm-vien-titanium-day-alpine-3-638616632578241765-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 21990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329719/apple-watch-ultra-2-lte-49mm-vien-titanium-day-alpine-1-638616632586155895-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 21990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329719/apple-watch-ultra-2-lte-49mm-vien-titanium-day-alpine-1-638616632586155895-750x500.jpg',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Huawei Watch D2 48mm',
    description:
      'Huawei Watch D2 dây cao su không chỉ là một chiếc đồng hồ thông minh với thiết kế hiện đại và đẹp mắt, mà còn được trang bị những tính năng sức khỏe tiên tiến, hỗ trợ tối ưu cho luyện tập và cuộc sống hàng ngày của người dùng. Đặc biệt, Huawei Watch D2 nổi bật với khả năng theo dõi huyết áp liên tục (ABPM), theo dõi điện tâm đồ (ECG), cùng hàng loạt tính năng thông minh khác, giúp cải thiện sức khỏe tổng thể và tạo điều kiện tối ưu cho việc quản lý lối sống.',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 8990000,
    entryPrice: 8790000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/331078/huawei-watch-d2-day-cao-su-hc-1-638661653268515606-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/331078/huawei-watch-d2-day-cao-su-hc-4-638661653287384167-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/331078/huawei-watch-d2-day-cao-su-hc-6-638661653299828433-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 8990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/331078/huawei-watch-d2-day-cao-su-hc-1-638661653268515606-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 8990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/331078/huawei-watch-d2-day-cao-su-hc-1-638661653268515606-750x500.jpg',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Huawei Watch GT 5 Pro 42mm viền gốm dây cao su',
    description:
      'Huawei Watch GT 5 Pro 42mm dây cao su là một tuyệt tác công nghệ và thời trang. Với thiết kế thanh lịch, viền gốm sang trọng và dây đeo cao su mềm mại, chiếc đồng hồ này không chỉ là một phụ kiện thời thượng mà còn là người bạn đồng hành đắc lực trong việc theo dõi sức khỏe, luyện tập thể thao và cuộc sống hằng ngày cho người dùng.',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 8990000,
    entryPrice: 8790000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/330179/huawei-watch-gt-5-pro-41mm-vien-gom-day-cao-su-2-638627745858848076-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/330179/huawei-watch-gt-5-pro-41mm-vien-gom-day-cao-su-3-638627745866177795-750x500.jpg',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'S',
        price: 8990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/330179/huawei-watch-gt-5-pro-41mm-vien-gom-day-cao-su-2-638627745858848076-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'L',
        price: 8990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/330179/huawei-watch-gt-5-pro-41mm-vien-gom-day-cao-su-2-638627745858848076-750x500.jpg',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Huawei Watch GT 5 41mm viền thép dây cao su',
    description:
      'Huawei Watch GT 5 là sự kết hợp hoàn hảo giữa thiết kế thời thượng, công nghệ tiên tiến và hiệu năng mạnh mẽ. Chiếc đồng hồ này không chỉ là công cụ hỗ trợ theo dõi sức khỏe 24/7 mà còn mang đến khả năng tập luyện chuyên nghiệp và kết nối liền mạch, ở bất cứ nơi đâu',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 49900000,
    entryPrice: 48900000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329700/huawei-watch-gt-5-xanh-1-638626892782150981-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329700/huawei-watch-gt-5-xanh-5-638626892808561416-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329700/huawei-watch-gt-5-xanh-3-638626892796418014-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'S',
        price: 49900000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329700/huawei-watch-gt-5-xanh-1-638626892782150981-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        size: 'L',
        price: 49900000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329700/huawei-watch-gt-5-xanh-1-638626892782150981-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Apple MacBook Air 13 inch M2 8GB/256GB (MLXY3SA/A)',
    description:
      'Sau 14 năm, ba lần sửa đổi và hai kiến trúc bộ vi xử lý khác nhau, kiểu dáng mỏng dần mang tính biểu tượng của MacBook Air đã đi vào lịch sử. Thay vào đó là một chiếc MacBook Air M2 với thiết kế hoàn toàn mới, độ dày không thay đổi tương tự như MacBook Pro, đánh bật mọi rào cản với con chip Apple M2 đầy mạnh mẽ.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 22190000,
    entryPrice: 21190000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-02-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-03-1-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'C0C0C0',
        price: 22190000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 22190000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop MacBook Air 13 inch M3 16GB/256GB',
    description:
      'Trong những tháng đầu năm 2024, nhà Apple đã cho ra mắt mẫu MacBook Air M3 13 inch 16GB 256GB được trang bị con chip M3 tiên tiến mạnh mẽ với kích thước nhỏ gọn, linh hoạt phù hợp với nhiều nhu cầu sử dụng, tự tin trở thành chiếc laptop xách tay năng suất nhất hiện nay',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 28890000,
    entryPrice: 27890000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/44/322633/macbook-air-13-inch-m3-2024-512gb-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/322633/macbook-air-13-inch-m3-2024-512gb-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/322633/macbook-air-13-inch-m3-2024-512gb-5-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 28890000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/44/322633/macbook-air-13-inch-m3-2024-512gb-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Apple MacBook Air 13 inch M2 16GB/256GB/10GPU',
    description:
      'Siêu phẩm Apple MacBook Air 13 inch M2 16GB 256GB kích thước 13 inch đã chính thức trình làng, mang đến một bước tiến vượt bậc về hiệu năng, hứa hẹn khuấy đảo thị trường máy tính xách tay.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 25790000,
    entryPrice: 24790000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/44/325306/apple-macbook-air-m2-2022-16gb-256gb-10gpu-xanh-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/325306/apple-macbook-air-m2-2022-16gb-256gb-10gpu-xanh-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/325306/apple-macbook-air-m2-2022-16gb-256gb-10gpu-xanh-6-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 25790000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/44/325306/apple-macbook-air-m2-2022-16gb-256gb-10gpu-xanh-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Samsung Galaxy Chromebook Go XE340XDA N4500/4GB/32GB/ChromeOS',
    description:
      'Bạn đang tìm kiếm một chiếc laptop học tập và văn phòng giúp xử lý hiệu quả mọi tác vụ công việc và giải trí hàng ngày? Hãy cân nhắc đến laptop Samsung Galaxy Chromebook Go XE340XDA N4500, một thiết bị mang lại hiệu năng ổn định, thiết kế tinh tế và mức giá lý tưởng, chắc chắn sẽ đáp ứng đầy đủ nhu cầu của bạn',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 8990000,
    entryPrice: 8790000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328598/samsung-galaxy-chromebook-go-xe340xda-n4500-glr-1-638618349969525771-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328598/samsung-galaxy-chromebook-go-xe340xda-n4500-glr-2-638618349977466372-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328598/samsung-galaxy-chromebook-go-xe340xda-n4500-glr-3-638618349984309102-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 8990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328598/samsung-galaxy-chromebook-go-xe340xda-n4500-glr-1-638618349969525771-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Samsung Galaxy Chromebook Go XE310XDA N4500/4GB/32GB/ChromeOS',
    description:
      'Bạn muốn tìm một mẫu laptop cho con trẻ học tập, sinh viên sử dụng hay nhân viên văn phòng trong mọi việc hàng ngày có cấu hình ổn định nhưng lại không có mức giá thành quá cao. Laptop Samsung Galaxy Chromebook Go XE310XDA N4500 chắc chắn là sự lựa chọn đáng cân nhắc nhất trong phân khúc. ',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 7990000,
    entryPrice: 7890000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328599/samsung-galaxy-chromebook-go-xe310xda-n4500-glr-1-638618364641044774-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328599/samsung-galaxy-chromebook-go-xe310xda-n4500-glr-2-638618364646794624-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328599/samsung-galaxy-chromebook-go-xe310xda-n4500-glr-4-638618364666006199-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 7990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328599/samsung-galaxy-chromebook-go-xe310xda-n4500-glr-1-638618364641044774-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Dell Inspiron 15 3530 i5 1334U/16GB/512GB/120Hz/OfficeHS/KYHD/Win11',
    description:
      'Bạn đang tìm kiếm chiếc laptop giải quyết được nhiều tác vụ từ học tập đến công việc nhưng chỉ với mức giá dưới 20 triệu thì laptop Dell Inspiron 15 3530 i5 1334U (71043885) là sản phẩm phù hợp với bạn. Máy không những sở hữu hiệu năng mạnh mẽ từ chip Intel thế hệ 13, thiết kế hiện đại mà còn đi kèm Office Home & Student vĩnh viễn và Keep Your Hard Drive tiện lợi',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 18490000,
    entryPrice: 17490000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328945/dell-inspiron-15-3530-i5-71043885-1-638663969880637167-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328945/dell-inspiron-15-3530-i5-71043885-2-638663969886886367-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328945/dell-inspiron-15-3530-i5-71043885-4-638663969903427679-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 18490000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328945/dell-inspiron-15-3530-i5-71043885-1-638663969880637167-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Dell Inspiron 15 3520 i5 1235U/8GB/512GB/120Hz/OfficeHS/KYHD/Win11',
    description:
      'Laptop Dell Inspiron 15 3520 i5 1235U (71027003) luôn nằm trong top những mẫu máy xách tay văn phòng tầm trung được ưa thích bởi tính tiện dụng đến từ hiệu năng ổn định, màn hình to, rõ nét cùng ngoại hình hiện đại và cực kì phù hợp với xu thế thị trường.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 13990000,
    entryPrice: 12990000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/44/321193/dell-inspiron-15-3520-i5-71027003-glr-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/321193/dell-inspiron-15-3520-i5-71027003-glr-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/321193/dell-inspiron-15-3520-i5-71027003-glr-4-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 13990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/44/321193/dell-inspiron-15-3520-i5-71027003-glr-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Acer Predator Helios Neo PHN16 71 53M7 i5 13500HX/16GB/512GB/8GB RTX4060/165Hz/Win11',
    description:
      'Laptop Acer Predator Helios Neo PHN16 71 53M7 i5 13500HX (NH.QLUSV.005) là sự lựa chọn hàng đầu cho các game thủ và người làm việc chuyên nghiệp cần một chiếc máy tính mạnh mẽ, hiệu suất cao. Đây là mẫu laptop gaming mang trong mình sức mạnh đỉnh cao với cấu hình vượt trội từ chip Intel dòng HX hiệu năng cao, card đồ họa rời RTX 40 series, mang đến trải nghiệm mượt mà cho cả chơi game lẫn xử lý công việc đồ họa.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 25490000,
    entryPrice: 24490000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330169/acer-predator-helios-neo-phn16-71-53m7-i5-nhqlusv005-1-638665759045470675-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330169/acer-predator-helios-neo-phn16-71-53m7-i5-nhqlusv005-2-638665759051996882-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330169/acer-predator-helios-neo-phn16-71-53m7-i5-nhqlusv005-4-638665759067519135-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 25490000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330169/acer-predator-helios-neo-phn16-71-53m7-i5-nhqlusv005-1-638665759045470675-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Acer Swift Go SFG14 71 513F i5 13500H/16GB/512GB/OfficeHS/Win11',
    description:
      'Bạn cần một mẫu máy gọn nhẹ, giá thành phải chăng nhưng mang hiệu năng vượt trội. Tham khảo ngay laptop Acer Swift Go SFG14 71 513F i5 13500H (NX.KPZSV.003) tại Thế Giới Di Động, sở hữu con chip Intel dòng H hiệu năng cao, RAM cùng SSD cho các yêu cầu đa nhiệm cao.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 16590000,
    entryPrice: 15590000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330164/acer-swift-go-sfg14-71-513f-i5-nxkpzsv003-glr-1-638685601947241115-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330164/acer-swift-go-sfg14-71-513f-i5-nxkpzsv003-glr-2-638685601955244560-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330164/acer-swift-go-sfg14-71-513f-i5-nxkpzsv003-glr-4-638685601967864595-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        price: 16590000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/330164/acer-swift-go-sfg14-71-513f-i5-nxkpzsv003-glr-1-638685601947241115-750x500.jpg',
      },
    ],
  },
  {
    title: 'Laptop Acer Gaming Aspire 7 A715 76G 5806 i5 12450H/16GB/512GB/4GB RTX3050/144Hz/Win11',
    description:
      'Laptop Acer Aspire 7 Gaming A715 76G 5806 i5 12450H (NH.QMFSV.002) đến từ nhà Acer với các thông số cấu hình đầy mạnh mẽ, card rời RTX 30 series cũng như sở hữu một mức giá thành lý tưởng, chắc chắn sẽ mang đến cho anh em những trải nghiệm tuyệt vời.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 18490000,
    entryPrice: 18490000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/44/313177/acer-aspire-7-gaming-a715-76g-5806-i5-nhqmfsv002-glr-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/313177/acer-aspire-7-gaming-a715-76g-5806-i5-nhqmfsv002-glr-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/44/313177/acer-aspire-7-gaming-a715-76g-5806-i5-nhqmfsv002-glr-4-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 18490000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/44/313177/acer-aspire-7-gaming-a715-76g-5806-i5-nhqmfsv002-glr-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy S24 Ultra 5G 12GB/256GB',
    description:
      'Samsung Galaxy S24 Ultra mẫu điện thoại cao cấp được ra mắt vào đầu năm 2024, sản phẩm tiếp tục kế thừa và cải tiến từ thế hệ trước. Điểm đặc biệt là sử dụng chip Snapdragon 8 Gen 3 for Galaxy, camera 200 MP và tích hợp nhiều tính năng AI.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 29990000,
    entryPrice: 28990000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-4-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-5-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 29990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 29990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '800080',
        price: 29990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy A16 8GB/128GB',
    description:
      'Samsung Galaxy A16 8GB/128GB là chiếc smartphone vừa đẹp vừa mạnh, phù hợp cho mọi nhu cầu từ giải trí đến công việc. Với thiết kế nhỏ gọn, hiện đại, màn hình lớn, camera rõ nét và pin bền, Galaxy A16 sẽ luôn bên bạn trong các hoạt động hằng ngày, đáp ứng tốt cả khi bạn cần giải trí hay làm việc.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 5690000,
    entryPrice: 5590000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/331207/samsung-galaxy-a16-xanh-1-638684923433246535-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/331207/samsung-galaxy-a16-xanh-4-638684923460301728-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/331207/samsung-galaxy-a16-xanh-5-638684923466072965-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '008000',
        price: 5690000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/331207/samsung-galaxy-a16-xanh-1-638684923433246535-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 5690000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/331207/samsung-galaxy-a16-xanh-1-638684923433246535-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 5690000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/331207/samsung-galaxy-a16-xanh-1-638684923433246535-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy Z Fold6 5G 12GB/256GB',
    description:
      'Sự quay trở lại đầy ấn tượng của siêu phẩm Samsung Galaxy Z Fold6, tiếp tục là biểu tượng cho sự đổi mới và sáng tạo của Samsung trong lĩnh vực điện thoại thông minh. Với những cải tiến vượt trội về mặt thiết kế, cấu hình cao hơn, tính năng xịn hơn và vẫn giữ nguyên phong cách gập mở đầy ấn tượng cho việc đa nhiệm và xử lý công việc của người dùng hiện đại',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 41990000,
    entryPrice: 41990000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-pink-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-pink-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-pink-5-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        price: 41990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-pink-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 41990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-pink-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 41990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/320721/samsung-galaxy-z-fold6-pink-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy Z Flip6 5G 12GB/256GB',
    description:
      'Kiệt tác của thiết kế và công nghệ hàng đầu với mẫu điện thoại Samsung Galaxy Z Flip6 làm say đắm mọi người dùng không chỉ qua khả năng gập ấn tượng mà còn sở hữu hiệu năng mạnh mẽ, có tích hợp AI vượt trội,... Không chỉ là một sản phẩm công nghệ thông thường đây còn là một phụ kiện thời trang nâng tầm phong cách người dùng',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 22990000,
    entryPrice: 21990000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-blue-1-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-blue-2-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-blue-6-1-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 22990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-blue-1-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 22990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-blue-1-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại iPhone 16 Pro Max 256GB',
    description:
      'iPhone 16 series mang đến nhiều nâng cấp quan trọng so với iPhone 15 series, từ hiệu năng, camera, đến các tính năng tiên tiến khác. Được trang bị chip A18 mạnh mẽ hơn, iPhone 16 mang lại hiệu suất vượt trội so với iPhone 15 với chip A16, giúp cải thiện khả năng xử lý đồ họa và tiết kiệm năng lượng tốt hơn​.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 34090000,
    entryPrice: 33090000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-2-638638962343879149-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-3-638638962351331027-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 34090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 34090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFD700',
        price: 34090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac-1-638638962337813406-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại iPhone 16 Pro 128GB',
    description:
      'Với sự ra mắt bùng nổ của phiên bản iPhone 16, Apple đã tiếp tục khẳng định vị thế của mình trong thị trường điện thoại thông minh bằng những cải tiến mang tính cách mạng. Sở hữu thiết kế tinh tế, công nghệ tiên tiến và hiệu năng vượt trội đã làm cho iPhone 16 Pro trở thành một trong những sản phẩm công nghệ đáng chú ý nhất năm, mang đến cho người dùng trải nghiệm tương lai trong tầm tay',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 28590000,
    entryPrice: 27590000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329143/iphone-16-pro-titan-sa-mac-1-638638979065595000-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329143/iphone-16-pro-titan-sa-mac-2-638638979074194078-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329143/iphone-16-pro-titan-sa-mac-3-638638979080345262-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 28590000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329143/iphone-16-pro-titan-sa-mac-1-638638979065595000-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 28590000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329143/iphone-16-pro-titan-sa-mac-1-638638979065595000-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFD700',
        price: 28590000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329143/iphone-16-pro-titan-sa-mac-1-638638979065595000-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại iPhone 16 Plus 128GB',
    description:
      'iPhone 16 Plus giữ nguyên phong cách thiết kế vuông vắn đặc trưng, nhưng đã được tinh chỉnh với các chi tiết hoàn thiện hơn, từ khung nhôm bền bỉ đến mặt lưng kính cường lực cao cấp. Mặt kính Ceramic Shield được thiết kế với cấu trúc bền bỉ hơn hẳn các loại cường lực khác, tăng 50% khả năng chịu lực so với thế hệ trước, giảm trầy xước, cấn vỡ nhưng đồng thời vẫn 2x được độ nhạy trong thao tác vuốt chạm.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 25390000,
    entryPrice: 24390000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329138/iphone-16-plus-hong-1-638639097116621517-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329138/iphone-16-plus-hong-2-638639097122291513-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329138/iphone-16-plus-hong-3-638639097128398108-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        price: 25390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329138/iphone-16-plus-hong-1-638639097116621517-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 25390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329138/iphone-16-plus-hong-1-638639097116621517-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 25390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329138/iphone-16-plus-hong-1-638639097116621517-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại iPhone 16 128GB',
    description:
      'iPhone 16 128GB đã tiếp tục xu hướng thiết kế vuông vức nhưng với một sự nâng cấp vượt trội khi sử dụng khung viền nhôm tái chế tương thích với môi trường. Chất liệu này tạo ra một cảm giác cứng cáp, mạnh mẽ và đẳng cấp hơn. Hơn nữa, mặt kính pha màu được ép ở mặt sau điện thoại vừa đẹp mắt lại vừa bền bỉ, đồng thời nhiều phối màu mới đa dạng với các phong cách và xu hướng sống cá tính.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 22290000,
    entryPrice: 21290000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329135/iphone-16-xanh-luu-ly-1-638639088268837180-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329135/iphone-16-xanh-luu-ly-2-638639088274865173-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329135/iphone-16-xanh-luu-ly-3-638639088281993338-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 22290000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329135/iphone-16-xanh-luu-ly-1-638639088268837180-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 22290000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329135/iphone-16-xanh-luu-ly-1-638639088268837180-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 22290000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329135/iphone-16-xanh-luu-ly-1-638639088268837180-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại Xiaomi 14T 5G 12GB/256GB',
    description:
      'Xiaomi 14T được hoàn thiện với sự hợp tác giữa Xiaomi và Leica - thương hiệu máy ảnh danh tiếng từ Đức. Sự kết hợp này hứa hẹn mang đến những bức ảnh sắc nét, giàu tính nghệ thuật, ngay cả trong điều kiện ánh sáng yếu. Máy nổi bật với nhiều tính năng AI thế hệ mới, chip MediaTek Ultra mạnh mẽ, pin bền bỉ, mang lại trải nghiệm toàn diện và mượt mà',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 12990000,
    entryPrice: 11990000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329938/xiaomi-14t-xam-1-638635700973443455-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329938/xiaomi-14t-xam-4-638635700990191021-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329938/xiaomi-14t-xam-5-638635700999858814-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 12990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329938/xiaomi-14t-xam-1-638635700973443455-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 12990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329938/xiaomi-14t-xam-1-638635700973443455-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 12990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329938/xiaomi-14t-xam-1-638635700973443455-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại Xiaomi Redmi Note 13 Pro 8GB/128GB',
    description:
      'Sự bùng nổ của công nghệ di động trong những năm gần đây đã mang đến cho người dùng vô số lựa chọn smartphone đa dạng. Trong phân khúc tầm trung, Xiaomi Redmi Note 13 Pro 128GB nổi lên như một ứng cử viên sáng giá với những ưu điểm vượt trội về thiết kế, hiệu năng nhờ chip Helio G99-Ultra, camera 200 MP và kết hợp sạc nhanh 67 W.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 5790000,
    entryPrice: 5790000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/42/314206/redmi-note-13-pro-xanh-la-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/314206/redmi-note-13-pro-xanh-la-5-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/42/314206/redmi-note-13-pro-xanh-la-7-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '008000',
        price: 5790000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/314206/redmi-note-13-pro-xanh-la-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 5790000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/314206/redmi-note-13-pro-xanh-la-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 5790000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/42/314206/redmi-note-13-pro-xanh-la-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại Xiaomi Redmi 14C 6GB/128GB',
    description:
      'Xiaomi Redmi 14C là lựa chọn hoàn hảo trong phân khúc tầm trung, nổi bật với màn hình sắc nét, hiệu năng mạnh mẽ, thiết kế hiện đại và hệ thống camera linh hoạt. Với dung lượng pin lớn và khả năng sạc nhanh, sản phẩm này đáp ứng tốt nhu cầu sử dụng hằng ngày, mang đến trải nghiệm vượt trội cho người dùng.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 3390000,
    entryPrice: 3290000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329008/redmi-14c-xanh-duong-1-638618466993077110-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329008/redmi-14c-xanh-duong-5-638618467020441998-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329008/redmi-14c-xanh-duong-8-638618467042837388-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 3390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329008/redmi-14c-xanh-duong-1-638618466993077110-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 3390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329008/redmi-14c-xanh-duong-1-638618466993077110-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 3390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/329008/redmi-14c-xanh-duong-1-638618466993077110-750x500.jpg',
      },
    ],
  },
  {
    title: 'Điện thoại OPPO Find X8 5G 16GB/512GB',
    description:
      'OPPO Find X8 thu hút sự chú ý với thiết kế viền màn hình siêu mỏng, mang lại vẻ đẹp hiện đại và tinh tế. Kích thước nhỏ gọn giúp dễ dàng thao tác bằng một tay, trong khi khả năng chụp ảnh vượt trội và thời lượng pin lâu dài khiến sản phẩm càng thêm hấp dẫn.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 22990000,
    entryPrice: 21990000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/322128/oppo-find-x8-xam-1-638684901754864978-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/322128/oppo-find-x8-xam-5-638684901784753068-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/322128/oppo-find-x8-xam-4-638684901774036119-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 22990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/322128/oppo-find-x8-xam-4-638684901774036119-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 22990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/322128/oppo-find-x8-xam-4-638684901774036119-750x500.jpg',
      },
    ],
  },
  {
    title: 'Máy tính bảng iPad 10 WiFi 64GB',
    description:
      'Sau khi trình làng hàng loạt mẫu iPhone vào tháng 09/2022 thì Apple cũng đã tiếp tục giới thiệu series iPad mới cho năm 2022. Trong đó iPad Gen 10 là cái tên được hãng chú trọng khá nhiều về việc tối ưu giá thành nhằm giúp người dùng có thể dễ dàng tiếp cận. Máy hỗ trợ hệ điều hành iPadOS 17 cùng con chip Apple A14 Bionic giúp mang lại hiệu năng vượt trội.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 8990000,
    entryPrice: 8890000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/522/294103/Kit/ipad-10-bbh-org.jpg',
      'https://cdn.tgdd.vn/Products/Images/522/294103/ipad-10-wifi-bac-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/522/294103/ipad-10-wifi-bac-2-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'C0C0C0',
        price: 8990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/294103/Kit/ipad-10-bbh-org.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 8990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/294103/Kit/ipad-10-bbh-org.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFF00',
        price: 8990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/294103/Kit/ipad-10-bbh-org.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFC0CB',
        price: 8990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/294103/Kit/ipad-10-bbh-org.jpg',
      },
    ],
  },
  {
    title: 'Máy tính bảng iPad mini 7 WiFi 128GB',
    description:
      'iPad mini 7 là thiết bị nhỏ gọn nhưng mạnh mẽ, được Apple phát triển với thiết kế tinh tế và công nghệ tiên tiến. Sản phẩm đặc biệt nổi bật với chip A17 Pro, màn hình Liquid Retina sắc nét và hỗ trợ Apple Pencil Pro, mang đến trải nghiệm tối ưu cho cả công việc lẫn giải trí.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 13990000,
    entryPrice: 12990000,
    images: ['https://cdn.tgdd.vn/Products/Images/522/331229/ipad-mini-7-wifi-blue-thumb-600x600.jpg', '', ''],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 13990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/331229/ipad-mini-7-wifi-blue-thumb-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 13990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/331229/ipad-mini-7-wifi-blue-thumb-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 13990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/331229/ipad-mini-7-wifi-blue-thumb-600x600.jpg',
      },
    ],
  },
  {
    title: 'Máy tính bảng iPad Air 6 M2 13 inch 5G 128GB',
    description:
      'Trong sự kiện Let Loose đầy ấn tượng, Apple đã giới thiệu dòng iPad Air M2 13 inch Cellular thế hệ mới. Sự kết hợp của chip thế hệ mới với hiệu năng vượt trội và thiết kế camera cải tiến, tương thích Apple Pencil Pro, hứa hẹn sẽ mang đến cho người dùng trải nghiệm đỉnh cao chưa từng có.',
    category: ' Mobiles & tablets',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 24790000,
    entryPrice: 23790000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/522/325525/ipad-air-13-inch-m2-lte-kem-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/522/325525/ipad-air-13-inch-m2-lte-kem-2-750x500.jpg',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 24790000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/325525/ipad-air-13-inch-m2-lte-kem-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 24790000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/325525/ipad-air-13-inch-m2-lte-kem-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Máy tính bảng Samsung Galaxy Tab S10 Ultra 5G 12GB/256GB',
    description:
      'Samsung Galaxy Tab S10 Ultra là minh chứng cho sự kết hợp hoàn hảo giữa thiết kế, hiệu năng và tính năng thông minh, mang đến trải nghiệm chưa từng có cho người dùng. Sản phẩm này không chỉ đơn thuần là một chiếc máy tính bảng, mà còn là công cụ hỗ trợ mạnh mẽ trong công việc, sáng tạo và giải trí.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 31990000,
    entryPrice: 30990000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/522/322132/samsung-galaxy-tab-s10-ultra-gray-1-638642576156419629-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/522/322132/samsung-galaxy-tab-s10-ultra-gray-4-638642576175942774-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/522/322132/samsung-galaxy-tab-s10-ultra-gray-5-638642576182510923-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 31990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/522/322132/samsung-galaxy-tab-s10-ultra-gray-1-638642576156419629-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'C0C0C0',
        price: 31990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/522/322132/samsung-galaxy-tab-s10-ultra-gray-1-638642576156419629-750x500.jpg',
      },
    ],
  },
  {
    title: 'Máy tính bảng Samsung Galaxy Tab A9+ 5G 4GB/64GB',
    description:
      'Với giá cả phải chăng, Samsung Galaxy Tab A9+ 5G là một sản phẩm máy tính bảng của Samsung dành cho người dùng muốn sở hữu một thiết bị giải trí cơ bản với màn hình rộng và khả năng kết nối mạng toàn diện để truy cập internet bất kỳ lúc nào và ở bất kỳ đâu.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 5990000,
    entryPrice: 5890000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/522/317623/samsung-galaxy-tab-a9-plus-xam-1-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/522/317623/sansung-galaxy-tab-a9-plus-xam-5-1-750x500.jpg',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 5990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/317623/samsung-galaxy-tab-a9-plus-xam-1-2-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000080',
        price: 5990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/522/317623/samsung-galaxy-tab-a9-plus-xam-1-2-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình Samsung S3 S33GC LS27C330GAEXXV 27 inch FHD/IPS/100Hz/4ms/HDMI',
    description:
      'Bạn đang tìm cho mình một mẫu màn hình văn phòng với mức giá cân đối nhưng lại đáp ứng được đa nhu cầu từ học tập, làm việc, chơi game giải trí đến đồ hoạ. Màn hình Samsung S3 S33GC LS27C330GAEXXV 27 inch FHD chắc chắn sẽ là sự lựa chọn không thể phù hợp hơn với sự trang bị về công nghệ hiện đại và thiết kế đầy cuốn hút. ',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 2790000,
    entryPrice: 2690000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/5697/315724/samsung-s3-s33gc-ls27c330gaexxv-27-inch-fhd-den-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/315724/samsung-s3-s33gc-ls27c330gaexxv-27-inch-fhd-den-4-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/315724/samsung-s3-s33gc-ls27c330gaexxv-27-inch-fhd-den-6-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 2790000,
        size: 'S',
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/5697/315724/samsung-s3-s33gc-ls27c330gaexxv-27-inch-fhd-den-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 2790000,
        size: 'L',
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/5697/315724/samsung-s3-s33gc-ls27c330gaexxv-27-inch-fhd-den-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình cong Samsung S3 S36C LS27C360EAEXXV 27 inch FHD/VA/FreeSync/75Hz/4ms/HDMI',
    description:
      'Màn hình cong Samsung S3 S36C LS27C360EAEXXV 27 inch FHD không chỉ mang lại sự hiện đại ấn tượng mà còn kết hợp cùng các công nghệ đỉnh cao, tạo nên một trải nghiệm tuyệt vời cho người dùng và thu hút ngay từ cái nhìn đầu tiên.',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 2790000,
    entryPrice: 2790000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/5697/306095/samsung-ls27c360eaexxv-27-inch-fhd-glr-3-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/306095/samsung-ls27c360eaexxv-27-inch-fhd-glr-4-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/306095/samsung-ls27c360eaexxv-27-inch-fhd-glr-6-1-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 2790000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/5697/306095/samsung-ls27c360eaexxv-27-inch-fhd-glr-3-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 2790000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/5697/306095/samsung-ls27c360eaexxv-27-inch-fhd-glr-3-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình Thông Minh Samsung M7 M70D LS32DM700UEXXV 32 inch 4K/VA/60Hz/4ms',
    description:
      'Màn Hình Thông Minh Samsung M7 M70D LS32DM700UEXXV 32 inch 4K là biểu tượng mới nhất của công nghệ màn hình thông minh, kết hợp giữa thiết kế tinh tế và tính ứng dụng vượt trội. Với kích thước 32 inch và độ phân giải UHD, đây không chỉ là một chiếc màn hình máy tính thông thường mà còn là trung tâm giải trí và làm việc đa năng tại nhà. Xứng đáng trở thành mẫu công cụ việc làm được lựa chọn hàng đầu của bạn.',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 9390000,
    entryPrice: 9390000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/5697/328466/samsung-lcd-m7-m70d-ls32dm700uexxv-32-inch-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/328466/samsung-lcd-m7-m70d-ls32dm700uexxv-32-inch-4-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/328466/samsung-lcd-m7-m70d-ls32dm700uexxv-32-inch-7-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 9390000,
        inventory: 20,
        image:
          'ttps://cdn.tgdd.vn/Products/Images/5697/328466/samsung-lcd-m7-m70d-ls32dm700uexxv-32-inch-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 9390000,
        inventory: 20,
        image:
          'ttps://cdn.tgdd.vn/Products/Images/5697/328466/samsung-lcd-m7-m70d-ls32dm700uexxv-32-inch-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình Samsung ViewFinity S8 LS27B800PXEXXV 27 inch 4K/IPS/60Hz/5ms/HDR400/HDMI/TypeC',
    description:
      'Màn hình Samsung ViewFinity S8 LS27B800PXEXXV 27 inch hứa hẹn sẽ mang đến cho người dùng những trải nghiệm vượt trội từ sáng tạo nội dung cho đến thiết kế đồ họa, một công cụ cần thiết để thực hiện hóa ý tưởng và tầm nhìn của bạn theo cách hoàn toàn mới.',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 7990000,
    entryPrice: 7990000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/5697/290765/samsung-ls27b800pxexxv-27-inch-4k-140922-053732-600x600.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/290765/samsung-ls27b800pxexxv-27-inch-4k-glr-3-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/290765/samsung-ls27b800pxexxv-27-inch-4k-glr-4-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 7990000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/5697/290765/samsung-ls27b800pxexxv-27-inch-4k-140922-053732-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 7990000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/5697/290765/samsung-ls27b800pxexxv-27-inch-4k-140922-053732-600x600.jpg',
      },
    ],
  },
  {
    title: 'Màn hình Samsung Gaming Odyssey Neo G9 G95NC LS57CG952NEXXV',
    description:
      'Với kích thước khổng lồ và độ phân giải cao siêu sắc nét, Samsung Gaming Odyssey Neo G9 G95NC LS57CG952NEXXV 57 inch 8K sẽ biến mọi khung hình trở nên sống động như thật, đưa bạn đắm chìm vào thế giới giải trí bất tận. Cho dù bạn là game thủ chuyên nghiệp hay nhà sáng tạo nội dung, chiếc màn hình này đều sẽ đáp ứng mọi yêu cầu khắt khe nhất của bạn.',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 50990000,
    entryPrice: 49990000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/5697/325117/samsung-odyssey-neo-g9-g95nc-ls57cg952nexxv-57-inch-8k-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/325117/samsung-odyssey-neo-g9-g95nc-ls57cg952nexxv-57-inch-8k-3-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/5697/325117/samsung-odyssey-neo-g9-g95nc-ls57cg952nexxv-57-inch-8k-6-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 50990000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/5697/325117/samsung-odyssey-neo-g9-g95nc-ls57cg952nexxv-57-inch-8k-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 50990000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/5697/325117/samsung-odyssey-neo-g9-g95nc-ls57cg952nexxv-57-inch-8k-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình Gaming LG UltraGear 24GS60F-B.ATV',
    description:
      'Màn hình Gaming LG UltraGear 24GS60F-B.ATV 23.8 inch Full HD không chỉ sở hữu thiết kế hiện đại, mà còn mang đến những trải nghiệm chơi game đỉnh cao nhờ vào những công nghệ hàng đầu được tích hợp bên trong. Từ những pha hành động nhanh đến những khung cảnh tĩnh lặng, chiếc màn hình này đều tái hiện một cách sống động và chân thực nhất giúp bạn đắm chìm hoàn toàn vào thế giới giải trí.',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 3390000,
    entryPrice: 3290000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331921/lg-24gs60f-b-atv-23-8-inch-fhd-ips-180hz-1ms-den-1-638668556367003324-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331921/lg-24gs60f-b-atv-23-8-inch-fhd-ips-180hz-1ms-den-4-638668556391712777-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331921/lg-24gs60f-b-atv-23-8-inch-fhd-ips-180hz-1ms-den-5-638668556396662862-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 3390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331921/lg-24gs60f-b-atv-23-8-inch-fhd-ips-180hz-1ms-den-1-638668556367003324-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 3390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331921/lg-24gs60f-b-atv-23-8-inch-fhd-ips-180hz-1ms-den-1-638668556367003324-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình LG 24MR400-B.ATVQ',
    description:
      'Màn hình LG 24MR400-B.ATVQD không chỉ sở hữu thiết kế hiện đại, mà còn mang đến những trải nghiệm chơi game đỉnh cao nhờ vào những công nghệ hàng đầu được tích hợp bên trong. Từ những pha hành động nhanh đến những khung cảnh tĩnh lặng, chiếc màn hình này đều tái hiện một cách sống động và chân thực nhất giúp bạn đắm chìm hoàn toàn vào thế giới giải trí.',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 2190000,
    entryPrice: 2090000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331923/lg-24mr400-b-atvq-23-8-inch-fhd-ips-100hz-5ms-den-1-638668701039371361-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331923/lg-24mr400-b-atvq-23-8-inch-fhd-ips-100hz-5ms-den-5-638668701066007599-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331923/lg-24mr400-b-atvq-23-8-inch-fhd-ips-100hz-5ms-den-6-638668701071203121-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 2190000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331923/lg-24mr400-b-atvq-23-8-inch-fhd-ips-100hz-5ms-den-1-638668701039371361-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 2190000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331923/lg-24mr400-b-atvq-23-8-inch-fhd-ips-100hz-5ms-den-1-638668701039371361-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình Gaming LG UltraGear 27GS60QC-B.ATVQ',
    description:
      'Màn hình Gaming LG UltraGear 27GS60QC-B.ATVQ 27 inch 2K được trang bị những công nghệ hiện đại, đáp ứng mọi nhu cầu của các game thủ và nhà thiết kế đồ họa. Tần số quét cao, thời gian đáp ứng nhanh giúp loại bỏ hiện tượng bóng mờ, mang đến trải nghiệm chơi game mượt mà, không giật lag. Công nghệ HDR10 tái tạo màu sắc chân thực, sống động, giúp bạn đắm chìm vào thế giới game. ',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 5790000,
    entryPrice: 5690000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331927/lg-ultragear-27gs60qc-b-atvq-27-inch-2k-va-180hz-1ms-den-1-638669193259061695-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331927/lg-ultragear-27gs60qc-b-atvq-27-inch-2k-va-180hz-1ms-den-4-638669193281397706-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331927/lg-ultragear-27gs60qc-b-atvq-27-inch-2k-va-180hz-1ms-den-5-638669193288086566-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 5790000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331927/lg-ultragear-27gs60qc-b-atvq-27-inch-2k-va-180hz-1ms-den-1-638669193259061695-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 5790000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331927/lg-ultragear-27gs60qc-b-atvq-27-inch-2k-va-180hz-1ms-den-1-638669193259061695-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình LG UltraWide 29WQ600-W.ATV',
    description:
      'Màn hình LG UltraWide 29WQ600-W.ATV 29 inch 2K là công cụ đắc lực dành cho các nhà thiết kế đồ họa. Tần số quét 100 Hz và thời gian đáp ứng nhanh chóng loại bỏ hiện tượng bóng mờ, đảm bảo hình ảnh luôn mượt mà, sống động, đặc biệt phù hợp với các tác vụ đồ họa đòi hỏi độ chính xác cao. Thiết kế hiện đại, viền mỏng tạo nên vẻ ngoài tinh tế, giúp màn hình hòa hợp với mọi không gian làm việc. ',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 4890000,
    entryPrice: 4790000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331933/lg-ultrawide-29wq600-w-atv-29-inch-2k-ips-100hz-5ms-1-638669422520326763-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331933/lg-ultrawide-29wq600-w-atv-29-inch-2k-ips-100hz-5ms-4-638669422540608079-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331933/lg-ultrawide-29wq600-w-atv-29-inch-2k-ips-100hz-5ms-3-638669422534980959-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 4890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331933/lg-ultrawide-29wq600-w-atv-29-inch-2k-ips-100hz-5ms-3-638669422534980959-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 4890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331933/lg-ultrawide-29wq600-w-atv-29-inch-2k-ips-100hz-5ms-3-638669422534980959-750x500.jpg',
      },
    ],
  },
  {
    title: 'Màn hình LG 32UR500-B.ATV',
    description:
      'Bạn đang tìm kiếm một màn hình lớn, sắc nét và đa năng để phục vụ cả nhu cầu làm việc và giải trí thì chiếc màn hình LG 32UR500-B.ATV 31.5 inch 4K này chính là giải pháp hoàn hảo với thiết kế hiện đại, chất lượng hình ảnh vượt trội và nhiều tính năng ưu việt, tất cả gói gọn trong một mức giá cực kỳ cạnh tranh.',
    category: '6762e1c0bc48cddc1df5af8c',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 6890000,
    entryPrice: 6790000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331932/lg-32ur500-b-atv-31-5-inch-4k-va-60hz-4ms-den-1-638669404629388703-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331932/lg-32ur500-b-atv-31-5-inch-4k-va-60hz-4ms-den-3-638669404644016071-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331932/lg-32ur500-b-atv-31-5-inch-4k-va-60hz-4ms-den-4-638669404652592853-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 6890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331932/lg-32ur500-b-atv-31-5-inch-4k-va-60hz-4ms-den-1-638669404629388703-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 6890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/5697/331932/lg-32ur500-b-atv-31-5-inch-4k-va-60hz-4ms-den-1-638669404629388703-750x500.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe Bluetooth AirPods Pro Gen 2',
    description:
      'AirPods Pro sở hữu thiết kế mang đậm chất thương hiệu Apple, màu sắc sang trọng, đi cùng nhiều công nghệ cho các iFan: chip Apple H2, chống bụi, chống ồn chủ động,... hứa hẹn mang đến trải nghiệm âm thanh sống động, chinh phục người dùng.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 5590000,
    entryPrice: 5490000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/315014/tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/315014/tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/315014/tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-3-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 5590000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/315014/tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'AirPods 4 MXP63',
    description:
      'AirPods 4 của Apple gây ấn tượng với thiết kế thanh lịch, nhỏ gọn và màu sắc hài hòa. Bên trong vẻ ngoài đơn giản đó là những công nghệ tiên tiến nhất của hãng. Chip H2 cùng với tính năng cân bằng âm thanh thích ứng (Adaptive EQ) hứa hẹn mang đến cho người dùng trải nghiệm âm thanh sống động và chân thực.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 3290000,
    entryPrice: 3190000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/329154/airpods-4-cong-usb-c-anc-1-638615780217991382-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/329154/airpods-4-cong-usb-c-anc-2-638615780223885505-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/329154/airpods-4-cong-usb-c-anc-4-638615780236387729-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 3290000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/329154/airpods-4-cong-usb-c-anc-1-638615780217991382-750x500.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe AirPods 3',
    description:
      'AirPods 3 sở hữu thiết kế gọn nhẹ, màu sắc trang nhã cùng nhiều công nghệ hiện đại đang chờ đón các iFan như: Kết nối Bluetooth, Adaptive EQ, Chip Apple H1,...',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 3790000,
    entryPrice: 3690000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/290053/tai-nghe-bluetooth-airpods-3-lightning-charge-apple-mpny3-trang-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/290053/tai-nghe-bluetooth-airpods-3-lightning-charge-apple-mpny3-trang-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/290053/tai-nghe-bluetooth-airpods-3-lightning-charge-apple-mpny3-trang-3-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 3790000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/290053/tai-nghe-bluetooth-airpods-3-lightning-charge-apple-mpny3-trang-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe chụp tai AirPods Max',
    description:
      "AirPods Max Apple sở hữu ngoại hình độc đáo, tích hợp các công nghệ hàng đầu trong thị trường tai nghe ở thời điểm ra mắt (2020). Tai nghe AirPods xứng đáng là món đồ công nghệ ''đỉnh của đỉnh'' nâng cấp trải nghiệm âm nhạc của người dùng.",
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 12190000,
    entryPrice: 11190000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-1-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-2-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-3-1-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 12190000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-1-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'C0C0C0',
        price: 12190000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-1-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe TWS Samsung Galaxy Buds3 Pro',
    description:
      'Tháng 7/2024 đánh dấu sự bùng nổ của Samsung với hàng loạt sản phẩm mới và một trong những tâm điểm không thể bỏ lỡ chính là Galaxy Buds 3 Pro - người bạn đồng hành âm nhạc hoàn hảo cho mọi tín đồ Samsung, không chỉ mang đến chất lượng âm thanh đỉnh cao mà còn được tích hợp công nghệ Galaxy AI thông minh, nâng tầm trải nghiệm âm nhạc của bạn lên một đẳng cấp mới.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 5090000,
    entryPrice: 4990000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/327554/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-pro-r630n-trang-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/327554/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-pro-r630n-trang-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/327554/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-pro-r630n-trang-3-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 5090000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/327554/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-pro-r630n-trang-1-750x500.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 5090000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/327554/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-pro-r630n-trang-1-750x500.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe TWS Samsung Galaxy Buds3',
    description:
      'Tận hưởng từng nhịp điệu ưa thích của bạn với Galaxy Buds 3 - ra mắt vào tháng 7/2024, đưa âm thanh đến gần tai bạn hơn với công nghệ ấn tượng cùng khả năng phiên dịch nhanh gọn của Galaxy AI, đưa đến một sản phẩm vừa bắt kịp xu hướng công nghệ lại vô cùng tiện dụng',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 3590000,
    entryPrice: 3490000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/327553/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-r530n-120724-112318-600x600.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/327553/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-r530n-xam-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/327553/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-r530n-xam-5-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '808080',
        price: 3590000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/327553/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-r530n-120724-112318-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 3590000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/327553/tai-nghe-bluetooth-true-wireless-samsung-galaxy-buds-3-r530n-120724-112318-600x600.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe Có Dây Samsung IA500',
    description:
      'Dây tai nghe Có Dây Samsung IA500 có độ dài là 125 cm rất thuận tiện khi dùng, bạn có thể để điện thoại đã cắm dây tai nghe vào túi hoặc balo mà vẫn sử dụng được, không cần phải cầm trên tay để sử dụng. ',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 250000,
    entryPrice: 200000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/264068/nhet-tai-samsung-ia500-den-3-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/264068/nhet-tai-samsung-ia500-den-8-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 250000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/54/264068/nhet-tai-samsung-ia500-den-thumb-600x600.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe TWS Sony WF-LS910N',
    description:
      'Khám phá đẳng cấp âm thanh mới với tai nghe TWS Sony WF-LS910N, một siêu phẩm công nghệ không dây từ Sony. Mang trong mình công nghệ khử tiếng ồn chủ động đỉnh cao, thời lượng pin ấn tượng cùng thiết kế nhỏ gọn và tiện lợi sản phẩm hứa hẹn sẽ cho bạn một trải nghiệm âm thanh chất lượng.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 5390000,
    entryPrice: 5290000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/332557/tai-nghe-tws-sony-wf-ls910n-271124-042435-903-600x600.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/332557/tai-nghe-tws-sony-wf-ls910n-xanh-1-638683202145715672-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/332557/tai-nghe-tws-sony-wf-ls910n-xanh-3-638683202128501817-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '00FFFF',
        price: 5390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/332557/tai-nghe-tws-sony-wf-ls910n-271124-042435-903-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 5390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/332557/tai-nghe-tws-sony-wf-ls910n-271124-042435-903-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 5390000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/332557/tai-nghe-tws-sony-wf-ls910n-271124-042435-903-600x600.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe Bluetooth Chụp Tai Sony WH-CH520',
    description:
      'Sony WH-CH520 được thiết kế dạng chụp tai với đệm tai êm ái, có thể thoải mái đeo suốt ngày dài, kiểu dáng sang trọng, khả năng kết nối không dây nhanh chóng với âm thanh sống động cùng nhiều tiện ích thú vị khác, mang đến cho bạn những trải nghiệm tối ưu nhất.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 1090000,
    entryPrice: 1000000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/313694/tai-nghe-bluetooth-chup-tai-sony-wh-ch520-thumb-600x600.jpg',
      '',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 1090000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/313694/tai-nghe-bluetooth-chup-tai-sony-wh-ch520-thumb-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 1090000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/313694/tai-nghe-bluetooth-chup-tai-sony-wh-ch520-thumb-600x600.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe Chụp Tai Sony MDR - ZX110AP',
    description: 'Tai nghe Chụp Tai Sony MDR - ZX110AP với thiết kế hiện đại, phong cách',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 425000,
    entryPrice: 400000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/75430/tai-nghe-sony-mdr-zx110ap-170724-034725-600x600.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/75430/tai-nghe-sony-mdr-zx110ap-trang-4-750x500-1.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/75430/tai-nghe-sony-mdr-zx110ap-trang-2-750x500-3.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 425000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/54/75430/tai-nghe-sony-mdr-zx110ap-170724-034725-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 425000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/54/75430/tai-nghe-sony-mdr-zx110ap-170724-034725-600x600.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe Chụp Tai Gaming Sony INZONE H3 MDR-G300',
    description:
      'Tai nghe Chụp Tai Gaming Sony INZONE H3 sở hữu gam màu thanh lịch, thiết kế dạng chụp tai đơn giản nhưng không kém phần thời thượng, âm thanh chân thực kết hợp cùng mic thoại thu âm rõ nét mang đến cho bạn những trải nghiệm chơi game hoàn hảo.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 1090000,
    entryPrice: 1000000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/313698/tai-nghe-chup-tai-gaming-sony-inzone-h3-mdr-g300-thumb-600x600.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/313698/tai-nghe-chup-tai-gaming-sony-inzone-h3-mdr-g300-3-750x500.jpg',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 1090000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/313698/tai-nghe-chup-tai-gaming-sony-inzone-h3-mdr-g300-thumb-600x600.jpg',
      },
    ],
  },
  {
    title: 'Tai nghe Bluetooth thể thao Sony Float Run WI-OE610',
    description:
      'Sony Float Run WI-OE610 sở hữu thiết kế độc đáo dành cho các tín đồ thể thao, đặc biệt là môn chạy bộ. Đi cùng với đó là các công nghệ tiên tiến mang đến cảm giác thoải mái và tự do, giúp bạn tận hưởng từng khoảnh khắc tập luyện.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 1990000,
    entryPrice: 1890000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/54/327511/tai-nghe-bluetooth-the-thao-sony-float-run-wi-oe610-600x600.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/327511/tai-nghe-bluetooth-the-thao-sony-float-run-wi-oe610-den-2-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/54/327511/tai-nghe-bluetooth-the-thao-sony-float-run-wi-oe610-den-3-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 1990000,
        inventory: 20,
        image:
          'https://cdn.tgdd.vn/Products/Images/54/327511/tai-nghe-bluetooth-the-thao-sony-float-run-wi-oe610-600x600.jpg',
      },
    ],
  },
  {
    title: 'Loa Bluetooth Sony ULT70 Field 7',
    description:
      'Sony ULT Field 7 là sự lựa chọn hoàn hảo cho những ai yêu thích âm nhạc và muốn tận hưởng những bữa tiệc không giới hạn. Với thiết kế nhỏ gọn, tiện lợi, cùng nhiều tính năng hiện đại như âm trầm mạnh mẽ, hệ thống đèn LED rực rỡ và khả năng chống nước, chống bụi, sản phẩm này chắc chắn sẽ là người bạn đồng hành hoàn hảo cho mọi hoạt động ngoài trời của bạn.',
    category: '6762e1c0bc48cddc1df5af8e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 10990000,
    entryPrice: 10790000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/2162/327959/loa-bluetooth-sony-srs-ult70-230724-023201-600x600.jpg',
      'https://cdn.tgdd.vn/Products/Images/2162/327959/loa-bluetooth-sony-ult-field-7-den-1-750x500.jpg',
      'https://cdn.tgdd.vn/Products/Images/2162/327959/loa-bluetooth-sony-ult-field-7-den-12-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 10990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/2162/327959/loa-bluetooth-sony-srs-ult70-230724-023201-600x600.jpg',
      },
    ],
  },
  {
    title: 'Loa Bluetooth Sony SRS-XB100',
    description:
      'Loa Bluetooth Sony SRS-XB100 sở hữu thiết kế vô cùng nhỏ gọn, độ bền cao, chất âm ấn tượng cùng thời lượng pin lâu dài,... đáp ứng đa dạng nhu cầu sử dụng của người dùng mọi lúc mọi nơi.',
    category: 'Protable Speakers',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 1090000,
    entryPrice: 1000000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/312682/loa-bluetooth-sony-srs-xb100-thumb-1-600x600.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/312682/loa-bluetooth-sony-srs-xb100-den-1-638646020813403204-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/312682/loa-bluetooth-sony-srs-xb100-den-2-638646020819442592-750x500.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 1090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/312682/loa-bluetooth-sony-srs-xb100-thumb-1-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '0000FF',
        price: 1090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/312682/loa-bluetooth-sony-srs-xb100-thumb-1-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFA500',
        price: 1090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/312682/loa-bluetooth-sony-srs-xb100-thumb-1-600x600.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: 'FFFFFF',
        price: 1090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/312682/loa-bluetooth-sony-srs-xb100-thumb-1-600x600.jpg',
      },
    ],
  },
  {
    title: 'Loa Bluetooth Sony SRS-XV500',
    description: 'Loa Bluetooth Sony SRS-XV500 Tổng công suất: 160 W Công nghệ âm thanh: S-Master 360RALDAC',
    category: 'Protable Speakers',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 8990000,
    entryPrice: 8990000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/329223/loa-bluetooth-sony-srs-xv500-csp6-xv500-den-1-638602935077389279-750x500.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/329223/loa-bluetooth-sony-srs-xv500-csp6-xv500-den-5-638602935113605038-750x500.jpg',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 8990000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/2162/329223/loa-bluetooth-sony-srs-xv500-csp6-xv500-den-5-638602935113605038-750x500.jpg',
      },
    ],
  },
  {
    title: 'Máy ảnh kỹ thuật số Sony ZV-E10',
    description:
      'Sony ZV E10 là một sản phẩm máy ảnh kỹ thuật số nổi tiếng thuộc thương hiệu Sony được thiết kế đặc biệt dành cho những người yêu thích nhiếp ảnh và quay phim. Máy ảnh được trang bị khả năng quay video 4K chất lượng cao, lấy nét tự động nhanh và chính xác, cùng với nhiều tính năng hỗ trợ quay vlog, ZV-E10 sẽ giúp bạn tạo ra những video chuyên nghiệp ngay cả khi bạn là người mới bắt đầu. Với thiết kế nhỏ gọn và tính năng chuyên nghiệp, chiếc máy ảnh Sony này hứa hẹn sẽ mang đến những trải nghiệm tuyệt vời cho người dùng',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 14990000,
    entryPrice: 14990000,
    images: [
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-e10-0.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-e10_2.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-e10_3.png',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 14990000,
        inventory: 20,
        image:
          'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-e10-0.png',
      },
    ],
  },
  {
    title: 'Máy ảnh kỹ thuật số Sony ZV-E10L',
    description:
      'Máy ảnh kỹ thuật số Sony ZV-E10L là người bạn đồng hành lý tưởng cho các vlogger muốn tạo ra những video chất lượng cao. Với cảm biến lớn và ống kính rời tích hợp micro chất lượng cao, ZV E10L giúp bạn ghi lại những khoảnh khắc đẹp một cách chân thực và sống động cũng như mang đến khả năng quay phim chất lượng điện ảnh, giúp bạn tạo ra những video vlog chuyên nghiệp ngay cả khi đang di chuyển. Từ những vlog du lịch đến những video chia sẻ kinh nghiệm, chiếc máy ảnh Sony đều đáp ứng mọi nhu cầu của bạn.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 16990000,
    entryPrice: 15990000,
    images: [
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-e10l-0.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-e10_1_1.png',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 16990000,
        inventory: 20,
        image:
          'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-e10_1_1.png',
      },
    ],
  },
  {
    title: 'Máy ảnh Kỹ Thuật số Sony E-mount Alpha 6400 cảm biến APS-C',
    description:
      'Máy ảnh Sony Alpha 6400 / ILCE-6400 thuộc dòng mirrorless trong phân khúc tầm trung với nhiều tính năng đặc điểm tuyệt vời. Phiên bản máy ảnh Mirrorless sở hữu độ phân giải cực cao với hiệu quả xử lý đáng kinh ngạc trong từng điểm ảnh nhằm giúp người dùng kiến tạo nên bộ sưu tập theo phong cách riêng.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 25990000,
    entryPrice: 24990000,
    images: [
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/_/m_y_nh_k_thu_t_s_sony_e-mount_alpha_6400_c_m_bi_n_aps-c_-_1.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_24__3_8.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_25__7_9.png',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 25990000,
        inventory: 20,
        image:
          'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/_/m_y_nh_k_thu_t_s_sony_e-mount_alpha_6400_c_m_bi_n_aps-c_-_1.png',
      },
    ],
  },
  {
    title: 'Máy ảnh kỹ thuật số Sony ZV-1',
    description:
      'Máy ảnh Sony ZV-1 với nhiều tính năng quay chụp như tua chậm, tua nhanh màn lại những thước phim đậm chất điện ảnh. Cụ thể thì máy ảnh Sony giá rẻ với khả năng ghi lại những khoảnh khắc một cách chớp nhoáng và phát chậm với tốc độ giảm 40 lần so với thời gian thực.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 15490000,
    entryPrice: 14490000,
    images: [
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-1-0.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-1_7.png',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 15490000,
        inventory: 20,
        image:
          'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-anh-sony-zv-1-0.png',
      },
    ],
  },
  {
    title: 'Máy ảnh kỹ thuật số Sony ZV-1 II Vlog On The Go_Lite',
    description:
      'Máy ảnh kỹ thuật số Sony ZV-1 II Vlog on the Go Lite là dòng máy ảnh hoàn hảo dành cho những ai đam mê quay vlog hoặc sáng tạo nội dung. Sở hữu tính năng hiện đại, cùng với đó là kiểu dáng gọn nhẹ và chất lượng hình ảnh vượt trội, máy ảnh mang đến trải nghiệm tuyệt vời khi sử dụng. Dù bạn là người mới bắt đầu hay chuyên nghiệp, ZV-1 II đều đáp ứng đầy đủ các nhu cầu từ quay phim, chụp ảnh đến thu âm chất lượng cao.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 20990000,
    entryPrice: 20000000,
    images: [
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_1__7_35.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_2__7_23.png',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        price: 20990000,
        inventory: 20,
        image:
          'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_1__7_35.png',
      },
    ],
  },
  {
    title: 'Smart Tivi QLED Samsung 4K 55 inch QA55Q65D',
    description:
      'Smart Tivi QLED Samsung có kích thước 55 inch và độ phân giải 4K. Kết hợp công nghệ Quantum Dot, hiển thị 100% dải màu',
    category: '671e27a677e97453ac8eaa16',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 13990000,
    entryPrice: 13890000,
    images: [
      'https://cdn.tgdd.vn/Products/Images/1942/322674/Slider/1fix2-1020x570.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/322674/tivi-qled-samsung-4k-55-inch-qa55q65d-4-638694616283923595-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/322674/tivi-qled-samsung-4k-55-inch-qa55q65d-5-638694616291990545-700x467.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 13990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/1942/322674/Slider/1fix2-1020x570.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'M',
        price: 13990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/1942/322674/Slider/1fix2-1020x570.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 13990000,
        inventory: 20,
        image: 'https://cdn.tgdd.vn/Products/Images/1942/322674/Slider/1fix2-1020x570.jpg',
      },
    ],
  },
  {
    title: 'Smart Tivi Samsung 4K Crystal UHD 55 inch UA55BU8000',
    description:
      'Smart Tivi Samsung 4K Crystal UHD 55 inch UA55BU8000 sở hữu thiết kế tinh tế, màn hình LED viền (Edge LED), VA LCD siêu mỏng đi cùng chất lượng hình ảnh 4K cực nét, công nghệ OTS Lite điều chỉnh âm thanh theo chuyển động của vật thể, hệ điều hành Tizen™ trực quan, thân thiện và vô số các tiện ích giải trí đi kèm chắc chắn đáp ứng nhu cầu giải trí cơ bản của gia đình bạn.',
    category: '671e27a677e97453ac8eaa16',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 12090000,
    entryPrice: 11090000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/273391/smart-samsung-4k-55-inch-ua55bu8000-1-638660090308224480-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/273391/smart-samsung-4k-55-inch-ua55bu8000-5-638660090340324429-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/273391/smart-samsung-4k-55-inch-ua55bu8000-7-638660090368970128-700x467.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 12090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/273391/smart-samsung-4k-55-inch-ua55bu8000-1-638660090308224480-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'M',
        price: 12090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/273391/smart-samsung-4k-55-inch-ua55bu8000-1-638660090308224480-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 12090000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/273391/smart-samsung-4k-55-inch-ua55bu8000-1-638660090308224480-700x467.jpg',
      },
    ],
  },
  {
    title: 'Smart Tivi NanoCell LG 4K 65 inch 65NANO76SQA',
    description:
      'Smart Tivi NanoCell LG 4K 65 inch 65NANO76SQA cuốn hút tầm nhìn nhờ màn hình 65 inch thanh mảnh, nội dung hiển thị sắc nét với độ phân giải 4K, tối ưu qua bộ xử lý α5 Gen5 AI 4K, âm thanh sống động cùng công nghệ AI Sound Pro, kho ứng dụng webOS 22 phong phú và điều khiển đầy thông minh qua Magic Remote, AI ThinQ mang đến trải nghiệm tuyệt vời.',
    category: '671e27a677e97453ac8eaa16',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 15890000,
    entryPrice: 14890000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/278575/smart-nanocell-lg-4k-65-inch-65nano76sqa-1-638700666877107549-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/278575/smart-nanocell-lg-4k-65-inch-65nano76sqa-5-638700666913836065-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/278575/smart-nanocell-lg-4k-65-inch-65nano76sqa-6-638700666922683991-700x467.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 15890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/278575/smart-nanocell-lg-4k-65-inch-65nano76sqa-1-638700666877107549-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'M',
        price: 15890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/278575/smart-nanocell-lg-4k-65-inch-65nano76sqa-1-638700666877107549-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 15890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/278575/smart-nanocell-lg-4k-65-inch-65nano76sqa-1-638700666877107549-700x467.jpg',
      },
    ],
  },
  {
    title: 'Smart Tivi QNED LG 4K 65 inch 65QNED80TSA',
    description:
      'Smart Tivi QNED LG 4K 65 inch 65QNED80TSA sở hữu thiết kế sang trọng, chất lượng hình ảnh 4K sống động cùng bộ xử lý α5 AI Processor 4K Gen7 màu sắc tươi tắn, công nghệ QNED Color cho màu sắc thuần khiết, công nghệ AI Sound Pro giúp âm thanh tinh chỉnh theo nội dung, hệ điều hành webOS 24 dễ dàng sử dụng, trang bị Magic Remote có sẵn micro hỗ trợ tìm kiếm bằng giọng nói.',
    category: '671e27a677e97453ac8eaa16',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 17590000,
    entryPrice: 16590000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324928/tivi-qned-lg-4k-65-inch-65qned80tsa-1-638693012023384996-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324928/tivi-qned-lg-4k-65-inch-65qned80tsa-5-638693012058738002-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324928/tivi-qned-lg-4k-65-inch-65qned80tsa-13-638693012115510980-700x467.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 17590000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324928/tivi-qned-lg-4k-65-inch-65qned80tsa-1-638693012023384996-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'M',
        price: 17590000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324928/tivi-qned-lg-4k-65-inch-65qned80tsa-1-638693012023384996-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 17590000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324928/tivi-qned-lg-4k-65-inch-65qned80tsa-1-638693012023384996-700x467.jpg',
      },
    ],
  },
  {
    title: 'Smart Tivi OLED LG 4K 55 inch 55C4PSA',
    description:
      'Bạn có thể đắm mình vào không gian điện ảnh cùng thế giới game đầy sôi động và rực rỡ với Smart Tivi OLED LG 4K 55 inch 55C4PSA. Sản phẩm được trang bị màn hình OLED hỗ trợ độ phân giải 4K kèm công nghệ âm thanh α9 AI Sound Pro và DTS:X giúp cho trải nghiệm giải trí của bạn thêm phần hoàn hảo.',
    category: '671e27a677e97453ac8eaa16',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 30890000,
    entryPrice: 30790000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324908/tivi-oled-lg-4k-55-inch-55c4psa-1-638693897134919778-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324908/tivi-oled-lg-4k-55-inch-55c4psa-5-638693897179964507-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324908/tivi-oled-lg-4k-55-inch-55c4psa-12-638693897458081231-700x467.jpg',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 30890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324908/tivi-oled-lg-4k-55-inch-55c4psa-1-638693897134919778-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'M',
        price: 30890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324908/tivi-oled-lg-4k-55-inch-55c4psa-1-638693897134919778-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 30890000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324908/tivi-oled-lg-4k-55-inch-55c4psa-1-638693897134919778-700x467.jpg',
      },
    ],
  },
  {
    title: 'Smart Tivi LG 4K 75 inch 75UT8050PSB',
    description:
      'Kích thước siêu lớn của Smart Tivi LG 4K 75 inch 75UT8050PSB khiến cho sản phẩm này mang đến trải nghiệm xem phim và chơi game tuyệt vời chưa từng có cho bất kì gia đình nào. Chiếc tivi này có bộ xử lý α5 AI Processor 4K Gen7, công nghệ nâng cấp độ phân giải hình ảnh 4K AI Upscaling, công nghệ âm thanh AI Sound Pro, hệ điều hành webOS 24 tích hợp kho ứng dụng giải trí phong phú.',
    category: '671e27a677e97453ac8eaa16',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 20190000,
    entryPrice: 20190000,
    images: [
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324915/tivi-led-lg-4k-75-inch-75ut8050psb-1-638703413022862314-700x467.jpg',
      'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324915/tivi-led-lg-4k-75-inch-75ut8050psb-5-638703413061321018-700x467.jpg',
      '',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'S',
        price: 20190000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324915/tivi-led-lg-4k-75-inch-75ut8050psb-1-638703413022862314-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'M',
        price: 20190000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324915/tivi-led-lg-4k-75-inch-75ut8050psb-1-638703413022862314-700x467.jpg',
      },
      {
        code: generateRandomCode('SKU'),
        color: '000000',
        size: 'L',
        price: 20190000,
        inventory: 20,
        image:
          'https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/1942/324915/tivi-led-lg-4k-75-inch-75ut8050psb-1-638703413022862314-700x467.jpg',
      },
    ],
  },
];

module.exports = fetchProduct = products.map((product) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${authToken}`);

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
