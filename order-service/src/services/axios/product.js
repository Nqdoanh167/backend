/** @format */

const {$post} = require('.');

/** @format */
const paths = ['product-service'];
const findOne = (query) => {
  return $post(paths, [{method: 'findOneProduct', query}]).then((res) => {
    // return
    try {
      if (res.data.length && res.data[0].response?.status === 200 && res.data[0].response?.data) {
        return res.data[0].response.data;
      } else {
        console.log('error findOneProduct', JSON.stringify(res.data[0].response));
      }
    } catch (error) {
      console.log('findOneProduct', error);
      throw new Error(error.toString());
    }
  });
};

const updateOne = (query, data) => {
  return $post(paths, [{method: 'updateOneProduct', query, data}]);
};

module.exports = {
  findOne,
  updateOne,
};
