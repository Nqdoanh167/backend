/** @format */

const {success} = require('../../../../../user-service/src/services/response');
const {location} = require('../../../config');
const axios = require('axios');
const getCities = async (req, res) => {
  try {
    const response = await axios.get(`${location?.url}/cities`, {
      headers: {
        Authorization: `Bearer ${location?.token}`,
        'Content-Type': 'application/json',
      },
    });
    return success(res)(response.data);
  } catch (error) {
    throw error;
  }
};
const getDistricts = async (req, res) => {
  try {
    const {code} = req.params;
    const response = await axios.get(`${location?.url}/cities/${code}/districts`, {
      headers: {
        Authorization: `Bearer ${location?.token}`,
        'Content-Type': 'application/json',
      },
    });
    return success(res)(response.data);
  } catch (error) {
    throw error;
  }
};
const getWards = async (req, res) => {
  try {
    const {code} = req.params;
    const response = await axios.get(`${location.url}/districts/${code}/wards`, {
      headers: {
        Authorization: `Bearer ${location.token}`,
        'Content-Type': 'application/json',
      },
    });
    return success(res)(response.data);
  } catch (error) {
    throw error;
  }
};
module.exports = {getDistricts, getWards, getCities};
