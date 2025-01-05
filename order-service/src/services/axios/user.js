/** @format */
const axios = require('axios');
const getAdminIds = async () => {
  try {
    return axios.get('http://localhost:8000/user-service/api/auth/admin-ids').then((res) => res.data?.data);
  } catch (error) {
    console.log({error});
  }
};
module.exports = {
  getAdminIds,
};
