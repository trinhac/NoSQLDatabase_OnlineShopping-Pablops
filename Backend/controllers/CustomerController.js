const Customer = require('../models/Customer');

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    }
    catch (error){
        res.status(500).json({error: 'Failed to fetch customers'});
    }
}

module.exports = {
    getAllCustomers,
}