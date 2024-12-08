/** @format */

const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.Types.ObjectId.prototype.view = function () {
  return {id: this.toString()};
};
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = mongoose;
