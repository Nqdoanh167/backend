/** @format */

const mongoose = require('mongoose');
const getBlog = require('./blog');
// call parallel api
async function main() {
  const connectMongoose = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/blog-service');
  };

  await connectMongoose();

  const createTaskList = async () => {
    await getBlog();
  };

  await Promise.allSettled([createTaskList]);
}

main();
