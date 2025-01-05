/** @format */

const http = require('http');
const api = require('./api');
const express = require('./services/express/index');
const {port, env, ip, apiRoot, mongo} = require('./config');
const app = express(apiRoot, api);
const server = http.createServer(app);

server.listen(port, ip, () => {
  console.log(`Payment service started on http://${ip}:${port} (${env})`);
});

module.exports = app;
