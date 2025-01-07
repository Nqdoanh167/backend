/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema(
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

categorySchema.methods = {
  view() {
    return {
      _id: this._id,
      name: this.name,
      thumbnail: this.thumbnail,
    };
  },
};

const Category = mongoose.model('Category', categorySchema);
const categoryCreateDto = {
  name: Category.schema.tree.name,
  thumbnail: Category.schema.tree.thumbnail,
};
const categoryUpdateDto = {
  name: Category.schema.tree.name,
  thumbnail: Category.schema.tree.thumbnail,
};
module.exports = {
  Category,
  categoryCreateDto,
  categoryUpdateDto,
};
