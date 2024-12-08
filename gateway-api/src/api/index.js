/** @format */

const {Router} = require('express');
const apiUpload = require('./upload');

const router = new Router();

router.use('/upload', apiUpload);

module.exports = router;
