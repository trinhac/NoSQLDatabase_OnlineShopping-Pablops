const express = require('express')
const router = express.Router();
const sellerController = require('../controllers/SellerController');


router.get('/sellers', sellerController.getAllSeller);
router.post('/add-seller', sellerController.createSeller);
router.post('/add-address-seller',sellerController.createAddressForSeller);

module.exports = router;