/** @format */

const {$post} = require('.');

/** @format */
const paths = ['product-service'];

const updateReviewProduct = (query, data) => {
  return $post(paths, [{method: 'updateReviewProduct', query, data}]).then((res) => {
    // return
    try {
      if (res.data.length && res.data[0].response?.status === 200 && res.data[0].response?.data) {
        return res.data[0].response.data;
      } else {
        console.log('error updateReviewProduct', JSON.stringify(res.data[0].response));
      }
    } catch (error) {
      console.log('updateReviewProduct', error);
      throw new Error(error.toString());
    }
  });
};

module.exports = {
  updateReviewProduct,
};
