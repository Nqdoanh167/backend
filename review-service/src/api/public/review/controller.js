/** @format */
const {notFound, success} = require('../../../services/response');
const {Review} = require('../../models/review');
const myReview = async ({querymen, user}, res, next) => {
  const {product_id} = querymen.query;
  Review.findOne({'updatedBy._id': user._id, product_id})
    .then((item) => ({data: item ? item.view() : null}))
    .then(success(res))
    .catch(next);
};
module.exports = {myReview};
