const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerID: {
        type: String,
        required: true
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_phone_number: {
        type: String, 
        required: false
    },
    customer_address_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: false
    },
    customer_cart: {
        cartID: String,
        customer_product_list:
        {
            type: Array,
            ref: 'Product',
            required: false,
        },
        total_price: {
            type: Number,
            default: 0,
        }
    }

}, {
    collection: 'Customer'
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;


// Customer contains:
// _id(default from Mongodb),
// customerID: string,
// customer_name: string,
// customer_phone_number :string,
// customer_address_id:string (reference to _id of the Address collection,
// customer_cart: Object (embedded type)
// 	cartID: string,
// 	customer_product_list Array contains productID: string (reference to productID of the Product collection),
// 	total_price: double
