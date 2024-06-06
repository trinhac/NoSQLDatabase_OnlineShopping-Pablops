// Seller Controller.js

const Seller = require('../models/Seller');
const Address = require('../models/Address');
const Product = require ('../models/Product');
const getAllSeller = async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching sellers' });
    }
};

const createSeller = async (req, res) => {
    try {
        const { seller_password, seller_username } = req.body;
        const newSeller = new Seller({
            seller_password,
            seller_username,
            seller_display_name,    
        });
        await newSeller.save();
        res.status(201).json(newSeller);
    } catch (error) {
        console.log('Error creating seller', error);
        res.status(500).json({ error: 'Error creating seller' });
    }
};

const createAddressForSeller = async (req, res) => {
    try {
        const { seller_username, streetAddress, city, district, country } = req.body;
        const seller = await Seller.findOne({ seller_username });

        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        // Create the product associated with the found seller
        const newAddress = new Address({
            sellerId: seller._id,
            streetAddress,
            city,
            district,
            country,
        });

        await newAddress.save();

        // Add the _id of the new product to the product_list array of the seller
        seller.seller_address_id.push(newAddress._id);
        await seller.save();

        res.status(201).json(newAddress);
    } catch (error) {
        console.log('Error creating product', error);
        res.status(500).json({ error: 'Error creating product' });
    }
};


const createProduct = async (req, res) => {
    try {
        const { seller_username, product_image, name, categoryID, price, amount, product_description } = req.body;

        // Find the seller based on the seller_username
        const seller = await Seller.findOne({ seller_username });

        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        // Create the product associated with the found seller
        const newProduct = new Product({
            sellerID: seller._id,
            product_image,
            name,
            categoryID,
            price,
            amount,
            product_description,
        });

        await newProduct.save();

        // Add the _id of the new product to the product_list array of the seller
        seller.product_list.push(newProduct._id);
        await seller.save();

        res.status(201).json(newProduct);
    } catch (error) {
        console.log('Error creating product', error);
        res.status(500).json({ error: 'Error creating product' });
    }
};

const getAddressBySellerId = async (req, res) => {
    try {
        const sellerId = req.params.sellerId;
        const addresses = await Address.find({ sellerId: sellerId });

        if (!addresses || addresses.length === 0) {
            return res.status(404).json({ error: 'Addresses not found' });
        }

        res.status(200).json(addresses);
    } catch (error) {
        console.log('Error fetching addresses', error);
        res.status(500).json({ error: 'Error fetching addresses' });
    }
};


const getProductsBySellerId = async (req, res) => {
    try {
        const sellerUsername = req.params.sellerId;

        // Find the seller based on the seller username
        const seller = await Seller.findOne({ seller_username: sellerUsername });

        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        // Find all products with the given sellerID
        const products = await Product.find({ sellerID: seller._id });

        res.status(200).json(products);
    } catch (error) {
        console.log('Error fetching products', error);
        res.status(500).json({ error: 'Error fetching products' });
    }
};

const getSellerBySellerId = async (req, res) => {
    try {
        const sellerUsername = req.params.sellerUsername;

        // Find the seller based on the seller username
        const seller = await Seller.findOne({ seller_username: sellerUsername });

        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        res.status(200).json(seller);
    } catch (error) {
        console.log('Error fetching seller', error);
        res.status(500).json({ error: 'Error fetching seller' });
    }
};




// Export all functions as an object
module.exports = {
    getAllSeller,
    createSeller,
    createAddressForSeller,
    createProduct,
    getProductsBySellerId,
    getSellerBySellerId,
    getAddressBySellerId,
};
