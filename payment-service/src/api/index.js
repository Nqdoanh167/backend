/** @format */

const {Router} = require('express');
const apiPublic = require('./public');

const router = new Router();

router.use('/', apiPublic);

module.exports = router;
