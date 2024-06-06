const express = require('express')
const router = express.Router();
const sellerController = require('../controllers/SellerController');


router.get('/sellers', sellerController.getAllSeller);
router.post('/create-seller', sellerController.createSeller);
router.post('/sellers/address', sellerController.createAddressForSeller);
router.post('/sellers/product', sellerController.createProduct);
router.get('/products/:sellerId', sellerController.getProductsBySellerId);
router.get('/sellers/:sellerUsername', sellerController.getSellerBySellerId);
router.get('/address/:sellerId', sellerController.getAddressBySellerId);
module.exports = router;