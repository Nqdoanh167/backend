/** @format */

const {Router} = require('express');
const apiPublic = require('./public');
const apiBackdoor = require('./backdoor');
const apiUpload = require('./upload');

const router = new Router();

router.use('/back-door', apiBackdoor);

router.use('/', apiPublic);

router.use('/upload', apiUpload);

module.exports = router;
