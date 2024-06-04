const express = require('express')
const router = express.Router();
const sellerController = require('../controllers/SellerController');


router.get('/sellers', sellerController.getAllSeller);

module.exports = router;