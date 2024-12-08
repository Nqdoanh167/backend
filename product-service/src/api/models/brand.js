/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const brandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

brandSchema.methods = {
  view() {
    return {
      _id: this._id,
      name: this.name,
      thumbnail: this.thumbnail,
    };
  },
};

const Brand = mongoose.model('Brand', brandSchema);
const brandCreateDto = {
  name: Brand.schema.tree.name,
  thumbnail: Brand.schema.tree.thumbnail,
};
const brandUpdateDto = {
  name: Brand.schema.tree.name,
  thumbnail: Brand.schema.tree.thumbnail,
};
module.exports = {
  Brand,
  brandCreateDto,
  brandUpdateDto,
};
