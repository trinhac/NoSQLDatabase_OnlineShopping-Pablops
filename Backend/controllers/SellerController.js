// Seller Controller.js

const Seller = require('../models/Seller');
const Address = require('../models/Address');

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
        const { sellerID, seller_name } = req.body;
        const newSeller = new Seller({
            sellerID,
            seller_name,
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
        const { sellerID, seller_address_id } = req.body;
        const address = new Address({
            _id: seller_address_id,
            streetAddress,
            city,
            district,
            country,
        });
        await address.save();
        res.status(201).json(address);
    } catch (error) {
        console.log('Error creating address', error);
        res.status(500).json({ error: 'Error creating address' });
    }
};

// Export all functions as an object
module.exports = {
    getAllSeller,
    createSeller,
    createAddressForSeller,
};
