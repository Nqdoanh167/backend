/** @format */

const http = require('http');
const api = require('./api');
const express = require('./services/express/index');
const {port, env, ip} = require('./config');

const app = express(api);

const server = http.createServer(app);

server.listen(port, ip, () => {
  console.log(`Api gateway started on http://${ip}:${port} (${env})`);
});

module.exports = app;
