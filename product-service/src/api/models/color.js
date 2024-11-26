/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const colorSchema = new Schema(
  {
    color_code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

colorSchema.methods = {
  view() {
    return {
      _id: this._id,
      color_code: this.color_code,
    };
  },
};

const Color = mongoose.model('Color', colorSchema);
const colorCreateDto = {
  color_code: Color.schema.tree.color_code,
};

module.exports = {
  Color,
  colorCreateDto,
};
