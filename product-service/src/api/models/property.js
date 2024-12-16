/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    values: [
      {
        name: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

propertySchema.methods = {
  view() {
    return {
      _id: this._id,
      name: this.name,
      code: this.code,
      values: this.values,
    };
  },
};

const Property = mongoose.model('Property', propertySchema);
const propertyCreateDto = {
  name: Property.schema.tree.name,
  code: Property.schema.tree.code,
  values: Property.schema.tree.values,
};
const propertyUpdateDto = {
  values: Property.schema.tree.values,
};
module.exports = {
  Property,
  propertyCreateDto,
  propertyUpdateDto,
};
