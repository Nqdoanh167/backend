/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const cartSchema = new Schema(
  {
    updatedBy: {
      _id: String,
      name: String,
      avatar: String,
    },
    quantity: Number,
    item: {
      code: String,
      title: String,
      image: String,
      color: String,
      size: String,
      price: Number,
      inventory: Number,
    },
  },
  {
    timestamps: true,
  },
);

cartSchema.methods = {
  view() {
    return {
      _id: this._id,
      quantity: this.quantity,
      updatedBy: this.updatedBy,
      item: this.item,
    };
  },
};

const Cart = mongoose.model('Cart', cartSchema);
const cartCreateDTO = {
  quantity: Cart.schema.tree.quantity,
  updatedBy: Cart.schema.tree.updatedBy,
  item: Cart.schema.tree.item,
};

module.exports = {
  Cart,
  cartCreateDTO,
};
