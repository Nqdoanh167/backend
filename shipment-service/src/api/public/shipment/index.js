/** @format */
/** @format */

const {Router} = require('express');
const {middleware: body} = require('bodymen');
const {middleware: query} = require('querymen');
const {Shipment, shipmentCreateDto, shipmentUpdateDto} = require('../../models/shipment');
const FactoryController = require('../../../services/factory');
const {admin, token} = require('../../../services/auth');
const {create, update} = require('./controller');
const router = new Router();

router.post('/', token, body(shipmentCreateDto), create);
router.get(
  '/',
  query({
    search: {
      type: String,
      paths: ['search'],
    },
  }),
  FactoryController.index(Shipment),
);
router.put('/:id', token, body(shipmentUpdateDto), update);
router.delete('/:id', token, FactoryController.destroy(Shipment));

module.exports = router;
