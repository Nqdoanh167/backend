/** @format */

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const {errorHandler: bodyErrorHandler} = require('bodymen');
const {errorHandler: queryErrorHandler} = require('querymen');
const {env} = require('../../config');
const cookieParser = require('cookie-parser');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

module.exports = (routes) => {
  const app = express();

  app.use('/user-service', (req, res, next) => {
    try {
      console.log('Routing request to user service');
      proxy.web(req, res, {target: 'http://localhost:8001'});
    } catch (error) {
      next(error);
    }
  });

  // Route requests to the product service
  app.use('/product-service', (req, res, next) => {
    try {
      console.log('Routing request to product service');
      proxy.web(req, res, {target: 'http://localhost:8002'});
    } catch (error) {
      next(error);
    }
  });

  // Route requests to the order service
  app.use('/order-service', (req, res, next) => {
    try {
      console.log('Routing request to order service');
      proxy.web(req, res, {target: 'http://localhost:8003'});
    } catch (error) {
      next(error);
    }
  });

  app.use('/review-service', (req, res) => {
    try {
      console.log('Routing request to review service');
      proxy.web(req, res, {target: 'http://localhost:8004'});
    } catch (error) {
      next(error);
    }
  });

  app.use('/blog-service', (req, res, next) => {
    try {
      console.log('Routing request to blog service');
      proxy.web(req, res, {target: 'http://localhost:8005'});
    } catch (error) {
      next(error);
    }
  });

  app.use('/cart-service', (req, res, next) => {
    try {
      console.log('Routing request to cart service');
      proxy.web(req, res, {target: 'http://localhost:8006'});
    } catch (error) {
      next(error);
    }
  });

  if (['production', 'development', 'beta'].includes(env)) {
    app.use(
      cors({
        origin: true, // URL của React app
        credentials: true, // Cho phép gửi cookie
      }),
    );
    app.use(compression());
    app.use(morgan('dev'));
  }

  app.use(express.urlencoded({extended: false}));
  app.use(express.json());
  app.use(cookieParser());
  app.use(routes);
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
