// addressRoutes.js

const express = require('express');
const router = express.Router();
const addressController = require('../controllers/AddressController'); // Import the controller

// Route to get all addresses
router.get('/addresses', addressController.getAllAddresses);
router.post('/add-address', addressController.createAddress);

// Other routes (create, update, delete) can be added similarly

module.exports = router;
