const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productID:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    categoryID:{
        type: String,
        required: false,
    },
    price:{
        type: Number,
        required: true,
        default: 0,
    },
    amount:{
        type: Number,
        required: true,
        default: 0,
    },
    product_description:{
        type: String,
        required: true,
    },
    sellerID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Seller',
        required: true,
    },

},
{collection: 'Product'});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

// Product contains:
// _id (default from Mongodb),
// productID: string,
// name: string,
// categoryID: string,
// price: double,
// amount: int,
// product_description: string,
// sellerID: string (reference to sellerID of Seller collection)