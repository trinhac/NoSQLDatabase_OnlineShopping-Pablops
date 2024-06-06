const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Seller',
    required:true,
  }
},
  { collection: 'Address' });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
