const express = require('express')
const router = express.Router();
const productController = require('../controllers/ProductController')

router.get('/products', productController.getAllProducts);

module.exports = router;