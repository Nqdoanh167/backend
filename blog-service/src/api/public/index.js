/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/', require('./blog'));

module.exports = router;
