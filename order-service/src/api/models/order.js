/** @format */

const {size, update, create} = require('lodash');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    updatedBy: {
      _id: String,
      name: String,
      avatar: String,
    },
    total_price: Number,
    status: {
      type: String,
      enum: ['created', 'confirmed', 'shipping', 'delivered', 'canceled'],
      default: 'created',
    },
    isShipment: {
      type: Boolean,
      default: false,
    },
    payment_type: {
      type: String,
      enum: ['credit_card', 'cod'],
      default: 'cod',
    },
    feeDelivery: {
      type: Number,
      default: 0,
    },
    items: [
      {
        code: String,
        title: String,
        image: String,
        color: String,
        size: String,
        quantity: Number,
        price: Number,
      },
    ],
    customer: {
      _id: String,
      name: String,
      address: String,
      telephoneNumber: String,
    },
  },
  {
    timestamps: true,
  },
);

orderSchema.pre('save', function (next) {
  this.isShipment = ['shipping', 'delivered', 'canceled'].includes(this.status);
  next();
});

orderSchema.methods = {
  view() {
    return {
      _id: this._id,
      updatedBy: this.updatedBy,
      total_price: this.total_price,
      status: this.status,
      payment_type: this.payment_type,
      items: this.items,
      customer: this.customer,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
      code: this.code,
      feeDelivery: this.feeDelivery,
      isShipment: this.isShipment,
    };
  },
};

const Order = mongoose.model('Order', orderSchema);
const orderCreateDTO = {
  total_price: Order.schema.tree.total_price,
  payment_type: Order.schema.tree.payment_type,
  items: Order.schema.tree.items,
  customer: Order.schema.tree.customer,
  feeDelivery: Order.schema.tree.feeDelivery,
};
const orderUpdateDTO = {
  total_price: Order.schema.tree.total_price,
  payment_type: Order.schema.tree.payment_type,
  items: Order.schema.tree.items,
  customer: Order.schema.tree.customer,
  status: Order.schema.tree.status,
  feeDelivery: Order.schema.tree.feeDelivery,
  isShipment: String,
};

module.exports = {
  Order,
  orderCreateDTO,
  orderUpdateDTO,
};
