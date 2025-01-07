/** @format */
const axios = require('axios');
function createUrl(paths) {
  return 'http://localhost:8000/' + paths.join('/') + '/api/back-door';
}

const $get = (paths, queryParams) => {
  return axios.get(createUrl(paths), queryParams).then((res) => res.data);
};

const $post = (paths, body) => {
  return axios.post(createUrl(paths), body).then((res) => res.data);
};

module.exports = {
  $get,
  $post,
};
