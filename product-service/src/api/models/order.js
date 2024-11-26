/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema(
  {
    user_id: String,
    total_price: Number,
    status: String,
    payment_type: String,
    items: [
      {
        variant_code: String,
        quantity: Number,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

orderSchema.methods = {
  view() {
    return {
      _id: this._id,
      user_id: this.user_id,
      total_price: this.total_price,
      status: this.status,
      payment_type: this.payment_type,
      items: this.items,
    };
  },
};

const Order = mongoose.model('Order', cartSchema);
const orderCreateDTO = {
  user_id: Order.schema.tree.user_id,
  total_price: Order.schema.tree.total_price,
  status: Order.schema.tree.status,
  payment_type: Order.schema.tree.payment_type,
  items: Order.schema.tree.items,
};

module.exports = {
  Order,
  orderCreateDTO,
};
