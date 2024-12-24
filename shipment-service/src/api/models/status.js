/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const statusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    bgColor: {
      type: String,
      default: '#2077FA',
    },
    updatedBy: {
      _id: String,
      name: String,
      avatar: String,
    },
    // Những trạng thái mà nó có thể chuyển đến
    nextStatus: [String],
  },
  {
    autoIndex: true,
    timestamps: true,
  },
);

statusSchema.methods = {
  view(full) {
    const view = {
      _id: this._id,
      name: this.name,
      code: this.code,
      bgColor: this.bgColor,
      updatedBy: this.updatedBy,
      nextStatus: this.nextStatus,
    };
    return full
      ? {
          ...view,
        }
      : view;
  },
};

const Status = mongoose.model('StatusShipment', statusSchema);

const statusCreateModel = {
  name: Status.schema.tree.name,
  code: Status.schema.tree.code,
  bgColor: String,
  nextStatus: Status.schema.tree.nextStatus,
};
const statusOrderUpdateModel = {
  name: Status.schema.tree.name,
  bgColor: String,
  nextStatus: Status.schema.tree.nextStatus,
};

module.exports = {
  Status,
  statusCreateModel,
  statusOrderUpdateModel,
};
