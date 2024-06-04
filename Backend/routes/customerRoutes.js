const express = require('express');
const router = express.Router();
const customerContoller = require('../controllers/CustomerController');

router.get('/customers', customerContoller.getAllCustomers);

module.exports = router;