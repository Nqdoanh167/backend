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

proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err.message);
  if (!res.headersSent) {
    res.status(502).json({error: 'Service unavailable'});
  }
});

module.exports = (routes) => {
  const app = express();

  const createProxyRoute = (path, target) => {
    app.use(path, (req, res, next) => {
      console.log(`Routing request to ${path}`);
      proxy.web(req, res, {target}, (err) => {
        console.error(`Error routing to ${path}:`, err.message);
        next(err);
      });
    });
  };

  // Định nghĩa các route cho proxy
  createProxyRoute('/user-service', 'http://localhost:8001');
  createProxyRoute('/product-service', 'http://localhost:8002');
  createProxyRoute('/order-service', 'http://localhost:8003');
  createProxyRoute('/review-service', 'http://localhost:8004');
  createProxyRoute('/blog-service', 'http://localhost:8005');
  createProxyRoute('/cart-service', 'http://localhost:8006');

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
    if (!res.headersSent) {
      try {
        let error = JSON.parse(err.message);
        console.log('err', error);
        res.status(error.status).json({
          status: error.status,
          statusText: 'ERROR',
          subStatus: err.status,
          subStatusText: 'ERROR',
          message: error.message,
          data: {},
        });
      } catch (parseError) {
        if (!res.headersSent) {
          res.status(400).send(err.message);
        }
      }
    }
  });

  return app;
};
