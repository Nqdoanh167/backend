/** @format */
const {notFound, success} = require('../../../services/response');
const {Review} = require('../../models/review');
const showOfMe = async ({user}, res, next) => {
  Review.findOne({user_id: user._id})
    .then((item) => ({data: item ? item.view() : null}))
    .then(success(res))
    .catch(next);
};
module.exports = {showOfMe};
