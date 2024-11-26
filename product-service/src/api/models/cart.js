/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const cartSchema = new Schema(
  {
    variant_code: String,
    user_id: String,
    quantity: Number,
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
      user_id: this.user_id,
      quantity: this.quantity,
    };
  },
};

const Cart = mongoose.model('Cart', cartSchema);
const cartCreateDTO = {
  variant_code: Cart.schema.tree.variant_code,
  user_id: Cart.schema.tree.user_id,
  quantity: Cart.schema.tree.quantity,
};

module.exports = {
  Cart,
  cartCreateDTO,
};
