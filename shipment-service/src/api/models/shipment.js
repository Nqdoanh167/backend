/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const shipmentSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      enum: ['confirmed', 'shipping', 'completed', 'canceled'],
      default: 'confirmed',
    },
    carrier: {
      _id: String,
      name: String,
      fee: Number,
      code: String,
    },

    order: {
      _id: String,
      code: String,
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
    },
    cod: Number,
  },
  {
    timestamps: true,
  },
);

shipmentSchema.methods = {
  view() {
    return {
      _id: this._id,
      status: this.status,
      carrier: this.carrier,
      cod: this.cod,
      code: this.code,
      order: this.order,
    };
  },
};

const Shipment = mongoose.model('Shipment', shipmentSchema);
const shipmentCreateDto = {
  status: Shipment.schema.tree.status,
  carrier: Shipment.schema.tree.carrier,
  cod: Shipment.schema.tree.cod,
  order: Shipment.schema.tree.order,
};
const shipmentUpdateDto = {
  status: Shipment.schema.tree.status,
};
module.exports = {
  Shipment,
  shipmentCreateDto,
  shipmentUpdateDto,
};
