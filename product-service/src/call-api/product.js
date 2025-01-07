/** @format */

const {generateRandomCode} = require('../utils/util');
const {authToken} = require('../config');

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const products = [
  {
    title: 'Tai nghe headphones bulk 10',
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
    title: 'APPLE Watch Series 2',
    description:
      'Apple Watch SE 2 2024 40mm viền nhôm dây cao su mang đến thiết kế mới mẻ với kích thước 40mm cùng bộ kính cường lực Ion-X cứng cáp. Sử dụng con chip S8 SiP cùng khả năng theo dõi nhịp tim, cùng nhiều tính năng như theo dõi giấc ngủ, phát hiện té ngã Apple Watch SE 2024 sẽ giúp bạn theo dõi sức khỏe liên tục cả ngày.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 100000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/22_884x.jpg?v=1655097801',
      'https://demo-digitic.myshopify.com/cdn/shop/products/22-01_884x.jpg?v=1655097801',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/22_884x.jpg?v=1655097801',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 100000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/22-01_884x.jpg?v=1655097801',
      },
    ],
  },
  {
    title: 'Đồng hồ thông tập thể dục Smart Watch ',
    description:
      'Vòng đeo tay thông minh được trang bị viên pin 233 mAh, cung cấp thời lượng sử dụng có thể lên đến 21 ngày thoải mái để yên tâm sử dụng. Màn hình AMOLED 1.62 inch độ phân giải 192 x 490 pixels mang lại trải nghiệm hiển thị sắc nét. Khả năng chống nước 5ATM, hơn 150 chế độ luyện tập, các tính năng theo dõi sức khỏe như chu kỳ kinh nguyệt, SpO2 và mức độ stress.',
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 110000,
    entryPrice: 90000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/21_884x.jpg?v=1655097438',
      'https://demo-digitic.myshopify.com/cdn/shop/products/21-02_884x.jpg?v=1655097450',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 110000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/21_884x.jpg?v=1655097438',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 110000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/21-02_884x.jpg?v=1655097450',
      },
    ],
  },
  {
    title: 'Camera Olympus pen Z9',
    description:
      'Olympus pen Z9 là mẫu máy ảnh mirrorless nhỏ gọn được trang bị cảm biến APS-C CMOS 24.2MP, khả năng quay phim dọc ấn tượng, cùng bộ xử lý hình ảnh DIGIC X mang lại những thước phim UHD 4K30p sống động trong mọi điều kiện quay chụp. Không chỉ vậy, camera còn sở hữu kính ngắm điện tử 2.36 triệu điểm, màn hình cảm ứng LCD đa góc 3 inch mang lại góc nhìn chuẩn cho những shoot ảnh.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 110000,
    entryPrice: 100000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/19_884x.jpg?v=1655097254',
      'https://demo-digitic.myshopify.com/cdn/shop/products/19_00_884x.jpg?v=1655097265',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 110000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/19_00_884x.jpg?v=1655097265',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 110000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/19_884x.jpg?v=1655097254',
      },
    ],
  },
  {
    title: 'Tai nghe H9i Wireless Over-Ear Headphones',
    description:
      'Tai nghe Bluetooth Chụp Tai Havit H661BT là dạng tai nghe chụp tai, sở hữu vẻ ngoài sang trọng, âm thanh sống động, kết nối nhanh chóng và ổn định, thời lượng pin sử dụng khá lâu, mang đến cho bạn những trải nghiệm tối ưu nhất.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 140000,
    entryPrice: 130000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/18_884x.jpg?v=1655097136',
      'https://demo-digitic.myshopify.com/cdn/shop/products/18_00_884x.jpg?v=1655097154',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 140000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/18_00_884x.jpg?v=1655097154',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 140000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/18_884x.jpg?v=1655097136',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy A23 128GB',
    description:
      'Samsung Galaxy A23, với sự hài hòa giữa thiết kế thanh lịch, sức mạnh công nghệ vượt bậc và bảo mật tối ưu, mang đến trải nghiệm đỉnh cao. Màn hình 6.7 inch rộng rãi, camera 50 MP sắc nét và thời lượng pin dài lâu giúp Galaxy A06 trở thành người bạn lý tưởng cho mọi hoạt động thường nhật của bạn.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 180000,
    entryPrice: 170000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/17_884x.jpg?v=1655096912',
      'https://demo-digitic.myshopify.com/cdn/shop/products/17_00_884x.jpg?v=1655096924',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 180000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/17_00_884x.jpg?v=1655096924',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 180000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/17_884x.jpg?v=1655096912',
      },
    ],
  },
  {
    title: 'Camera giám sát 2K 1080P Streaming Webcam with Ring Light',
    description:
      'Camera IP 360 Độ 2MP Ezviz C6N có kích cỡ nhỏ nhắn, cầm nắm thoải mái chỉ bằng 1 bàn tay, cho bạn dễ dàng trong việc di chuyển, bố trí trong không gian cần sử dụng camera.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb9',
    price: 180000,
    entryPrice: 170000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/16_884x.jpg?v=1655096743',
      'https://demo-digitic.myshopify.com/cdn/shop/products/16_01_884x.jpg?v=1655096752',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 180000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/16_01_884x.jpg?v=1655096752',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 180000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/16_884x.jpg?v=1655096743',
      },
    ],
  },
  {
    title: 'Máy tính bảng Honor T1 7.0 1 GB RAM 8 GB ROM with Wi-Fi+3G',
    description:
      'Sau khi trình làng hàng loạt mẫu iPhone vào tháng 09/2022 thì Apple cũng đã tiếp tục giới thiệu series iPad mới cho năm 2022. Trong đó iPad Gen 10 là cái tên được hãng chú trọng khá nhiều về việc tối ưu giá thành nhằm giúp người dùng có thể dễ dàng tiếp cận. Máy hỗ trợ hệ điều hành iPadOS 17 cùng con chip Apple A14 Bionic giúp mang lại hiệu năng vượt trội.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 180000,
    entryPrice: 170000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_884x.jpg?v=1655096645',
      'https://demo-digitic.myshopify.com/cdn/shop/products/15_03_884x.jpg?v=1655096656',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 180000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/15_03_884x.jpg?v=1655096656',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 180000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_884x.jpg?v=1655096645',
      },
    ],
  },
  {
    title: 'Macbook Pro 2021',
    description:
      'Khi nhắc đến máy tính xách tay dành riêng cho công việc sáng tạo và kỹ thuật, cái tên MacBook luôn giữ một vị trí khó thay thế. Năm nay, laptop Macbook Pro 14 Nano M4 Pro 24GB/512GB đã chứng minh Apple vẫn luôn đi trước một bước, mang đến một thiết bị không chỉ mạnh mẽ mà còn sang trọng, tinh tế. ',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 200000,
    entryPrice: 190000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/14_884x.jpg?v=1655096578',
      'https://demo-digitic.myshopify.com/cdn/shop/products/14_00_884x.jpg?v=1655096590',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 200000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/14_00_884x.jpg?v=1655096590',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 200000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/14_884x.jpg?v=1655096578',
      },
    ],
  },
  {
    title: 'Máy chụp ảnh Sony ExperiaV1',
    description:
      'ExperiaV1 là mẫu máy ảnh mirrorless nhỏ gọn được trang bị cảm biến APS-C CMOS 24.2MP, khả năng quay phim dọc ấn tượng, cùng bộ xử lý hình ảnh DIGIC X mang lại những thước phim UHD 4K30p sống động trong mọi điều kiện quay chụp. Không chỉ vậy, camera còn sở hữu kính ngắm điện tử 2.36 triệu điểm, màn hình cảm ứng LCD đa góc 3 inch mang lại góc nhìn chuẩn cho những shoot ảnh.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 100000,
    entryPrice: 80000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/13_884x.jpg?v=1655096476',
      'https://demo-digitic.myshopify.com/cdn/shop/products/13_02_884x.jpg?v=1655096485',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 100000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/13_02_884x.jpg?v=1655096485',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 100000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/13_884x.jpg?v=1655096476',
      },
    ],
  },
  {
    title: 'Loa Beoplay A1 Portable Bluetooth',
    description:
      'Trong thế giới âm thanh di động hiện đại, JBL Clip 5 nổi bật như một lựa chọn lý tưởng cho những người yêu thích sự tiện lợi và chất lượng âm thanh. Với thiết kế nhỏ gọn, nhẹ nhàng và tính năng chống nước IP67, JBL Clip 5 sẽ là người bạn đồng hành hoàn hảo cho những giai điệu yêu thích của bạn.',
    category: '671e27a677e97453ac8eaa1a',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 1500000,
    entryPrice: 1300000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/12_884x.jpg?v=1655096377',
      'https://demo-digitic.myshopify.com/cdn/shop/products/12_01_884x.jpg?v=1655096387',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 1500000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_01_884x.jpg?v=1655096387',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 1500000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/12_884x.jpg?v=1655096377',
      },
    ],
  },
  {
    title: 'Máy tính bảng Rockerz 400 Bluetooth Headset Pink',
    description:
      'TCL Tab 10L Gen 3 là chiếc máy tính bảng hoàn hảo cho những ai tìm kiếm sự kết hợp giữa hiệu suất mạnh mẽ, thiết kế tinh tế và tính năng giải trí vượt trội. Với màn hình lớn 10.1 inch sắc nét, hiệu năng mạnh mẽ, camera chất lượng và thời gian sử dụng pin dài, máy đáp ứng nhu cầu học tập, làm việc và giải trí cho cả gia đình.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 120000,
    entryPrice: 100000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/10_884x.jpg?v=1655096098',
      'https://demo-digitic.myshopify.com/cdn/shop/products/10_02_884x.jpg?v=1655096141',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 120000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/10_02_884x.jpg?v=1655096141',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 120000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/10_884x.jpg?v=1655096098',
      },
    ],
  },
  {
    title: 'Đồng hồ thông minh Milanese Loop Watch Band',
    description:
      "Trong sự kiện ra mắt sản phẩm mới It's Glowtime tháng 9/2024, bên cạnh các dòng iPhone 16 thì Apple Watch Series 10 42mm - một bước tiến mới trong các dòng smartwatch của nhà Apple cũng được trình làng. Với màn hình OLED lớn và sáng vượt trội, cùng với hàng loạt tính năng sức khỏe và thể thao tiên tiến, chiếc đồng hồ này không chỉ là một phụ kiện thời trang mà còn là một trợ thủ đắc lực cho cuộc sống hiện đại.",
    category: '671e27a677e97453ac8eaa18',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 170000,
    entryPrice: 160000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/09_884x.jpg?v=1655095977',
      'https://demo-digitic.myshopify.com/cdn/shop/products/09_01_884x.jpg?v=1655095991',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 170000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_01_884x.jpg?v=1655095991',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 170000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/09_884x.jpg?v=1655095977',
      },
    ],
  },
  {
    title: 'Máy ảnh Hero Session Action Camera with 8MP Photos',
    description:
      'Hero Session Actionlà mẫu máy ảnh mirrorless nhỏ gọn được trang bị cảm biến APS-C CMOS 24.2MP, khả năng quay phim dọc ấn tượng, cùng bộ xử lý hình ảnh DIGIC X mang lại những thước phim UHD 4K30p sống động trong mọi điều kiện quay chụp. Không chỉ vậy, camera còn sở hữu kính ngắm điện tử 2.36 triệu điểm, màn hình cảm ứng LCD đa góc 3 inch mang lại góc nhìn chuẩn cho những shoot ảnh.',
    category: '671e27a677e97453ac8eaa14',
    brand: '671ca08a0f6bb9337fb5dbb7',
    price: 180000,
    entryPrice: 170000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/05_884x.jpg?v=1655095813',
      'https://demo-digitic.myshopify.com/cdn/shop/products/05_00_884x.jpg?v=1655095821',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 180000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/05_00_884x.jpg?v=1655095821',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 180000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/05_884x.jpg?v=1655095813',
      },
    ],
  },
  {
    title: 'Loa Sony EXTRA BASS Portable Splash-proof Wireless',
    description:
      'Loa Bluetooth Sony EXTRA BASS là sản phẩm mang đến sự tiện lợi và đẳng cấp trong thiết kế lẫn chất lượng âm thanh với thiết kế loa mini bỏ túi, cùng âm thanh mạnh mẽ và nhiều tính năng vượt trội, đây là một sự lựa chọn hoàn hảo cho những người yêu thích âm nhạc di động.',
    category: '671e27a677e97453ac8eaa1a',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 190000,
    entryPrice: 180000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/03_884x.jpg?v=1655095694',
      'https://demo-digitic.myshopify.com/cdn/shop/products/03_01_884x.jpg?v=1655095707',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 190000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/03_01_884x.jpg?v=1655095707',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 190000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/03_884x.jpg?v=1655095694',
      },
    ],
  },
  {
    title: 'Apple MacBook Air Laptop: M1 chip, 13.3-inch/33.74 cm',
    description:
      'Laptop Apple MacBook Air M1 2020 thuộc dòng laptop cao cấp sang trọng có cấu hình mạnh mẽ, chinh phục được các tính năng văn phòng lẫn đồ hoạ mà bạn mong muốn, thời lượng pin dài, thiết kế mỏng nhẹ sẽ đáp ứng tốt các nhu cầu làm việc của bạn.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 160000,
    entryPrice: 150000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/02_81b35a28-42fc-4d51-a8e1-48d2c061e3ed_884x.jpg?v=1655095599',
      'https://demo-digitic.myshopify.com/cdn/shop/products/02_00_884x.jpg?v=1655095610',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 160000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/02_00_884x.jpg?v=1655095610',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 160000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/02_81b35a28-42fc-4d51-a8e1-48d2c061e3ed_884x.jpg?v=1655095599',
      },
    ],
  },
  {
    title: 'Tai nghe chụp Apple AirPods Max 2020 with Smart Case – Blue',
    description:
      'Apple AirPods Max  là sự kết hợp hoàn hảo giữa hiệu năng mạnh mẽ, âm thanh chất lượng cao và thiết kế thoải mái. Dù bạn là người yêu âm nhạc, đam mê công nghệ hay chỉ đơn giản cần một chiếc tai nghe để tập trung làm việc, sản phẩm này chắc chắn sẽ đáp ứng mọi nhu cầu của bạn.',
    category: '671e27a677e97453ac8eaa1e',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 120000,
    entryPrice: 110000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/06_1f4f68e8-e872-4bbc-b9f1-9b86af764a1d_884x.jpg?v=1655095456',
      'https://demo-digitic.myshopify.com/cdn/shop/products/06_00_884x.jpg?v=1655095464',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 120000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/06_00_884x.jpg?v=1655095464',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 120000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/06_1f4f68e8-e872-4bbc-b9f1-9b86af764a1d_884x.jpg?v=1655095456',
      },
    ],
  },
  {
    title: 'Màn hình Dell S27QC 27 inch 4K UHD Monitor – Grey',
    description:
      'Mẫu màn hình gaming đến từ thương hiệu Dell mang thiết kế ấn tượng, mở rộng không gian giải trí của bạn với kích thước 27 inch cùng đa dạng các công nghệ hiện đại. Màn hình Gaming Asus VG279Q3A 27 inch FHD chắc chắn sẽ là sự lựa chọn hoàn hảo cho những ai đam mê các tựa game hay làm việc trong lĩnh vực sáng tạo yêu cầu độ chính xác màu sắc cao.',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb5',
    price: 140000,
    entryPrice: 130000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/08_884x.jpg?v=1655095351',
      'https://demo-digitic.myshopify.com/cdn/shop/products/08_00_884x.jpg?v=1655095360',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 140000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/08_00_884x.jpg?v=1655095360',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 140000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/08_884x.jpg?v=1655095351',
      },
    ],
  },
  {
    title: 'Điện thoại Iphone 13 Pro',
    description:
      'Sự ra mắt ấn tượng vào tháng 09/2024, Apple đã một lần nữa khẳng định vị thế dẫn đầu của mình trên thị trường smartphone với sự ra mắt của dòng iPhone 16. Với iPhone 16 Plus không chỉ kế thừa những ưu điểm vượt trội từ các phiên bản trước mà còn được trang bị nhiều cải tiến đột phá, chip mới mẻ hơn, thiết kế độc đáo',
    category: '671e27a677e97453ac8eaa12',
    brand: '671ca08a0f6bb9337fb5dbb1',
    price: 140000,
    entryPrice: 120000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/07_884x.jpg?v=1655095215',
      'https://demo-digitic.myshopify.com/cdn/shop/products/07_00_884x.jpg?v=1655095223',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 140000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_00_884x.jpg?v=1655095223',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 140000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/07_884x.jpg?v=1655095215',
      },
    ],
  },
  {
    title: 'Máy tính bảng Samsung Galaxy Tab A SM-T295, 4G Factory Unlocked',
    description:
      'Samsung Galaxy Tab S10 Ultra là minh chứng cho sự kết hợp hoàn hảo giữa thiết kế, hiệu năng và tính năng thông minh, mang đến trải nghiệm chưa từng có cho người dùng. Sản phẩm này không chỉ đơn thuần là một chiếc máy tính bảng, mà còn là công cụ hỗ trợ mạnh mẽ trong công việc, sáng tạo và giải trí.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 150000,
    entryPrice: 120000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/04_1dd5e4d2-861f-4f8e-8d28-28f5934a7e13_884x.jpg?v=1655095076',
      'https://demo-digitic.myshopify.com/cdn/shop/products/04_00_884x.jpg?v=1655095087',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 150000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/04_00_884x.jpg?v=1655095087',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 150000,
        inventory: 20,
        image:
          'https://demo-digitic.myshopify.com/cdn/shop/products/04_1dd5e4d2-861f-4f8e-8d28-28f5934a7e13_884x.jpg?v=1655095076',
      },
    ],
  },
  {
    title: 'Điện thoại Samsung Galaxy Note10+ Mobile Phone',
    description:
      'Samsung Galaxy S24 Ultra mẫu điện thoại cao cấp được ra mắt vào đầu năm 2024, sản phẩm tiếp tục kế thừa và cải tiến từ thế hệ trước. Điểm đặc biệt là sử dụng chip Snapdragon 8 Gen 3 for Galaxy, camera 200 MP và tích hợp nhiều tính năng AI.',
    category: '671e27a677e97453ac8eaa1c',
    brand: '671ca08a0f6bb9337fb5dbb3',
    price: 140000,
    entryPrice: 130000,
    images: [
      'https://demo-digitic.myshopify.com/cdn/shop/products/01_884x.jpg?v=1655094851',
      'https://demo-digitic.myshopify.com/cdn/shop/products/01_02_884x.jpg?v=1655094859',
    ],
    status: 'active',
    variants: [
      {
        code: generateRandomCode('SKU'),
        color: '#FF0000',
        size: 'S',
        price: 140000,
        inventory: 10,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/01_02_884x.jpg?v=1655094859',
      },
      {
        code: generateRandomCode('SKU'),
        color: '#0000FF',
        size: 'L',
        price: 140000,
        inventory: 20,
        image: 'https://demo-digitic.myshopify.com/cdn/shop/products/01_884x.jpg?v=1655094851',
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
