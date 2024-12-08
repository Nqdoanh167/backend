/** @format */

const {Router} = require('express');
const apiPublic = require('./public');
const apiUpload = require('./upload');
const {token} = require('../services/auth');

const router = new Router();

router.use('/', token, apiPublic);
router.use('/upload', apiUpload);

module.exports = router;
