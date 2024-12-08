/** @format */

const merge = require('lodash/merge');
const dotenv = require('dotenv').config();

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    ip: process.env.IP || 'localhost',
    cloudinaryConfig: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },
  development: {},
};
const mergeConfig = merge(config.all, config[config.all.env]);
module.exports = mergeConfig;
