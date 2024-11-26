/** @format */

const mongoose = require('mongoose');
// const fetchBrands = require('./brand');
// const fetchColor = require('./color');
// const fetchSize = require('./size');
const getCategory = require('./category');
// call parallel api
async function main() {
  const connectMongoose = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/product-service');
  };

  await connectMongoose();

  const createTaskList = async () => {
    // await fetchBrands();
    // await fetchColor();
    // await fetchSize();
    await getCategory();
  };

  await Promise.allSettled([createTaskList]);
}

main();
