/** @format */

const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');

const proxy = httpProxy.createProxyServer();
const app = express();
app.use(cors());

// Route requests to the user service
app.use('/user-service', (req, res) => {
  console.log('Routing request to user service');

  proxy.web(req, res, {target: 'http://localhost:8001'});
});

// Route requests to the product service
app.use('/product-service', (req, res) => {
  console.log('Routing request to product service');
  proxy.web(req, res, {target: 'http://localhost:8002'});
});

// Route requests to the order service
// app.use("/user-service", (req, res) => {
//   console.log("Routing request to order service");
//   proxy.web(req, res, { target: "http://localhost:8003" });
// });

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});
