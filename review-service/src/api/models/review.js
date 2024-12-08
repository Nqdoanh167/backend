/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const reviewSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    product_id: {
      type: String,
      required: true,
    },
    content: String,
    starRating: Number,
  },
  {
    timestamps: true,
  },
);

reviewSchema.methods = {
  view() {
    return {
      _id: this._id,
      user_id: this.user_id,
      product_id: this.product_id,
      content: this.content,
      starRating: this.starRating,
    };
  },
};

const Review = mongoose.model('Review', reviewSchema);
const reviewCreateDto = {
  product_id: Review.schema.tree.product_id,
  content: Review.schema.tree.content,
  starRating: Review.schema.tree.starRating,
};
module.exports = {
  Review,
  reviewCreateDto,
};
