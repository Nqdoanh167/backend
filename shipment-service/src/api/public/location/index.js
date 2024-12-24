/** @format */

const {Router} = require('express');
const {getDistricts, getWards, getCities} = require('./controller');
const router = new Router();
router.get('/cities', getCities);
router.get('/districts/:code', getDistricts);
router.get('/wards/:code', getWards);
module.exports = router;
