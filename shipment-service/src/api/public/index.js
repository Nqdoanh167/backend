/** @format */

const {Router} = require('express');
const router = new Router();

router.use('/locations', require('./location'));
router.use('/shipments', require('./shipment'));
router.use('/carriers', require('./carrier'));
router.use('/statuses', require('./status'));

module.exports = router;
