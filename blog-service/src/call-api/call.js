/** @format */

const mongoose = require('mongoose');
const getBlog = require('./blog');
// call parallel api
async function main() {
  const connectMongoose = async () => {
    await mongoose.connect('mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net/blog-service');
  };

  await connectMongoose();

  const createTaskList = async () => {
    await getBlog();
  };

  await Promise.allSettled([createTaskList]);
}

main();
