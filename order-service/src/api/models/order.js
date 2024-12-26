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
    carrier: {
      _id: String,
      name: String,
      fee: Number,
      code: String,
    },
    status: {
      type: String,
      enum: ['created', 'confirmed', 'shipping', 'completed', 'canceled'],
      default: 'created',
    },
    payment_type: {
      type: String,
      enum: ['credit_card', 'cod'],
      default: 'cod',
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
      telephoneNumber: String,
      address: String,
      cityCode: String,
      districtCode: String,
      wardCode: String,
      city: String,
      district: String,
      ward: String,
    },
    isShipment: {
      type: Boolean,
      default: false,
    },
  },
  {
    autoIndex: true,
    timestamps: true,
  },
);

orderSchema.pre('save', function (next) {
  this.isShipment = ['shipping', 'delivered', 'confirmed', 'completed'].includes(this.status);
  next();
});

orderSchema.index({code: 'text'});

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
      carrier: this.carrier,
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
  carrier: Order.schema.tree.carrier,
  status: Order.schema.tree.status,
};
const orderUpdateDTO = {
  total_price: Order.schema.tree.total_price,
  payment_type: Order.schema.tree.payment_type,
  items: Order.schema.tree.items,
  customer: Order.schema.tree.customer,
  status: Order.schema.tree.status,
  carrier: Order.schema.tree.carrier,
};

module.exports = {
  Order,
  orderCreateDTO,
  orderUpdateDTO,
};
