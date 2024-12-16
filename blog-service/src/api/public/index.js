/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/blogs', require('./blog'));

module.exports = router;
