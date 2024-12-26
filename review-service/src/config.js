/** @format */

const merge = require('lodash/merge');
const dotenv = require('dotenv').config();

const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
};
const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8004,
    ip: process.env.IP || 'localhost',
    apiRoot: process.env.API_ROOT || '/api',
    service: process.env.SERVICE,
    serviceToken: process.env.SERVICE_TOKEN,
    apiEndpoint: process.env.API_ENDPOINT,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    cloudinaryConfig: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },
  development: {
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb+srv://nqdcntt2002:doanh2002716@cluster0.jbpwspc.mongodb.net',
    },
  },
};
const mergeConfig = merge(config.all, config[config.all.env]);
module.exports = mergeConfig;
