/** @format */

const mongoose = require('mongoose');
// const fetchBrands = require('./brand');
// const fetchColor = require('./color');
// const fetchSize = require('./size');
const getProduct = require('./product');
// call parallel api
async function main() {
  const connectMongoose = async () => {
    await mongoose.connect('mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net/product-service');
  };

  await connectMongoose();

  const createTaskList = async () => {
    // await fetchBrands();
    // await fetchColor();
    // await fetchSize();
    await getProduct();
  };

  await Promise.allSettled([createTaskList]);
}

main();
