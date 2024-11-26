/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const sizeSchema = new Schema(
  {
    size_code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

sizeSchema.methods = {
  view() {
    return {
      _id: this._id,
      size_code: this.size_code,
    };
  },
};

const Size = mongoose.model('Size', sizeSchema);
const sizeCreateDto = {
  size_code: Size.schema.tree.size_code,
};
module.exports = {
  Size,
  sizeCreateDto,
};
