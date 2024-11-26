/** @format */

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const {errorHandler: bodyErrorHandler} = require('bodymen');
const {errorHandler: queryErrorHandler} = require('querymen');
const {env} = require('../../config');
module.exports = (apiRoot, routes) => {
  const app = express();
  if (['production', 'development', 'beta'].includes(env)) {
    app.use(cors());
    app.use(compression());
    app.use(morgan('dev'));
  }

  app.use(express.urlencoded({extended: false}));
  app.use(express.json());
  app.use(apiRoot, routes);
  app.use(queryErrorHandler);
  app.use(bodyErrorHandler);

  app.use((err, req, res, next) => {
    console.log('err global', err);
    // res.headersSent: Check xem đã trả dữ liệu cho client chưa. Nếu chưa thì chạy tiếp
    if (!res.headersSent) {
      try {
        let error = JSON.parse(err.message);
        console.log('err', error);
        // if (error.statusCode) {
        //   resByCode(res, error.statusCode);
        // } else if (!isNaN(error.status)) {
        // }
        res.status(error.status).json({
          status: error.status,
          statusText: 'ERROR',
          subStatus: err.status,
          subStatusText: 'ERROR',
          message: error.message,
          data: {},
        });
      } catch (error) {}
      if (!res.headersSent) {
        res.status(400).send(err.message);
      }
    }
  });

  return app;
};
