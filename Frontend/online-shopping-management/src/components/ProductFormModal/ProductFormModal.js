// ProductFormModal.js
import React from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import './ProductFormModal.css';

const ProductFormModal = ({ showModal, closeModal, sellerUsername }) => {
    const [productData, handleChange] = useForm({
        product_image: '',
        name: '',
        categoryID: '',
        price: 0,
        amount: 0,
        product_description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting product for seller:', sellerUsername); // Log the seller username
            const response = await axios.post('http://localhost:3000/api/sellers/product', {
                seller_username: sellerUsername, // Include seller_username in the request body
                ...productData,
            });
            console.log('Product data submitted:', response.data);
            closeModal(); // Close the modal after submission
        } catch (error) {
            console.error('Error submitting product:', error);
        }
    };

    return (
        <div className={`modal ${showModal ? 'show' : ''}`} role="dialog" aria-labelledby="modal-title">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title" tabIndex="-1">Add Product</h5>
                        <button type="button" className="close" onClick={closeModal} aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="product_image">Product Image URL</label>
                                <input
                                    type="text"
                                    id="product_image"
                                    name="product_image"
                                    value={productData.product_image}
                                    onChange={handleChange}
                                    placeholder="Product Image URL"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={productData.name}
                                    onChange={handleChange}
                                    placeholder="Product Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoryID">Category ID</label>
                                <input
                                    type="text"
                                    id="categoryID"
                                    name="categoryID"
                                    value={productData.categoryID}
                                    onChange={handleChange}
                                    placeholder="Category ID"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={productData.price}
                                    onChange={handleChange}
                                    placeholder="Price"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={productData.amount}
                                    onChange={handleChange}
                                    placeholder="Amount"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_description">Product Description</label>
                                <textarea
                                    id="product_description"
                                    name="product_description"
                                    value={productData.product_description}
                                    onChange={handleChange}
                                    placeholder="Product Description"
                                    required
                                />
                            </div>
                            <button type="submit">Save Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFormModal;
