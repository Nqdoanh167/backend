/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const cartSchema = new Schema(
  {
    variant_code: String,
    quantity: Number,
    updatedBy: {
      _id: String,
      name: String,
      avatar: String,
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
      variant_code: this.variant_code,
      quantity: this.quantity,
      updatedBy: this.updatedBy,
    };
  },
};

const Cart = mongoose.model('Cart', cartSchema);
const cartCreateDTO = {
  variant_code: Cart.schema.tree.variant_code,
  quantity: Cart.schema.tree.quantity,
  updatedBy: Cart.schema.tree.updatedBy,
};

module.exports = {
  Cart,
  cartCreateDTO,
};
