/** @format */

const mongoose = require('mongoose');
const {generateRandomCode} = require('../../utils/util');
const {Schema} = mongoose;

const carrierSchema = new Schema(
  {
    name: String,
    fee: Number,
    code: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

carrierSchema.pre('save', function (next) {
  if (!this.code) {
    this.code = generateRandomCode('DVVC');
  }
  next();
});

carrierSchema.methods = {
  view() {
    return {
      _id: this._id,
      name: this.name,
      fee: this.fee,
      code: this.code,
    };
  },
};

const Carrier = mongoose.model('Carrier', carrierSchema);
const carrierCreateDto = {
  name: Carrier.schema.tree.name,
  fee: Carrier.schema.tree.fee,
  code: Carrier.schema.tree.code,
};
module.exports = {
  Carrier,
  carrierCreateDto,
};
