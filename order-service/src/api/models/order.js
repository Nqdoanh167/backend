/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema(
  {
    updatedBy: {
      _id: String,
      name: String,
      avatar: String,
    },
    total_price: Number,
    status: String,
    payment_type: {
      type: String,
      enum: ['credit_card', 'cod'],
      default: 'cod',
    },
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
      updatedBy: this.updatedBy,
      total_price: this.total_price,
      status: this.status,
      payment_type: this.payment_type,
      items: this.items,
    };
  },
};

const Order = mongoose.model('Order', orderSchema);
const orderCreateDTO = {
  total_price: Order.schema.tree.total_price,
  payment_type: Order.schema.tree.payment_type,
  items: Order.schema.tree.items,
};

module.exports = {
  Order,
  orderCreateDTO,
};
