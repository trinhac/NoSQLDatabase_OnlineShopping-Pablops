const Address = require('../models/Address'); // Import the Address model

// Controller action to get all addresses
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching addresses' });
  }
};

const createAddress = async (req, res) => {
  try {
    const { streetAddress, city, district, country } = req.body;

    // Validate required fields
    // if (!streetAddress || !city || !district || !country) {
    //   return res.status(400).json({ error: 'All fields are required' });
    // }

    // Create a new address document
    const newAddress = new Address({
      streetAddress,
      city,
      district,
      country,
    });

    // Save the address to the database
    await newAddress.save();

    res.status(201).json(newAddress); // Return the created address
  } catch (error) {
    console.error('Error creating address:', error);
    res.status(500).json({ error: 'Error creating address' });
  }
};
// Other controller actions (create, update, delete) can be added similarly

module.exports = {
  getAllAddresses,
  createAddress
  // Add other controller actions here
};
