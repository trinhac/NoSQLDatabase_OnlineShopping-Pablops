const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    seller_username :{
        type: String,
        required: true,
    },
    seller_password: {
        type: String,
        required: true
    },
    seller_display_name:{
        type: String,
        required: false,
        default: "Test"
    },
    seller_address_id:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'Address',
        required: false,
    },
    product_list:{
        type:  [mongoose.Schema.Types.ObjectId],
        ref:'Product',
        required: false,
    },
}, 
{collection: 'Seller'});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;



// Seller contains:
// _id (default from Mongodb) 
// sellerID: string
// seller_name: string
// seller_address_id: string (reference to _id of the Address' collection)
// product_list Array contains productID: string (reference to productID of the Product collection),