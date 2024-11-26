/** @format */

const {Router} = require('express');
const apiPublic = require('./public');
const apiUpload = require('./upload');

const router = new Router();

router.use('/', apiPublic);
router.use('/upload', apiUpload);

module.exports = router;
