/** @format */

const {$post} = require('.');

/** @format */
const paths = ['order-service'];

const updateOne = (query, data) => {
  return $post(paths, [{method: 'updateOneOrder', query, data}]).then((res) => {
    // return
    try {
      if (res.data.length && res.data[0].response?.status === 200 && res.data[0].response?.data) {
        return res.data[0].response.data;
      } else {
        console.log('error updateOneOrder', JSON.stringify(res.data[0].response));
      }
    } catch (error) {
      console.log('updateOneOrder', error);
      throw new Error(error.toString());
    }
  });
};

module.exports = {
  updateOne,
};
