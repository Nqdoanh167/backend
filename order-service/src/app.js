/** @format */

const http = require('http');
const api = require('./api');
const mongoose = require('./services/mongoose');
const express = require('./services/express/index');
const {port, env, ip, apiRoot, mongo} = require('./config');
const app = express(apiRoot, api);
const server = http.createServer(app);
const {socketService} = require('./services/socket');
if (mongo.uri) {
  mongoose.connect(mongo.uri);
}

socketService(server);

server.listen(port, ip, () => {
  console.log(`Order service started on http://${ip}:${port} (${env})`);
});

module.exports = app;
