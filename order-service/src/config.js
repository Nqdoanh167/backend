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
    port: process.env.PORT || 8003,
    ip: process.env.IP || 'localhost',
    apiRoot: process.env.API_ROOT || '/api',
    service: requireProcessEnv('SERVICE'),
    serviceToken: requireProcessEnv('SERVICE_TOKEN'), // order-service
    apiEndpoint: requireProcessEnv('API_ENDPOINT'),
    jwtSecret: requireProcessEnv('JWT_SECRET'),
    jwtExpiresIn: requireProcessEnv('JWT_EXPIRES_IN'),
    cloudinaryConfig: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },
  development: {
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/backend',
    },
  },
};
const mergeConfig = merge(config.all, config[config.all.env]);
module.exports = mergeConfig;
