// Home.js
import React, { useState } from 'react';
import AddressFormModal from '../AddressFormModal/AddressFormModal'; // Import the AddressFormModal component
import ProductFormModal from '../ProductFormModal/ProductFormModal'; // Import the ProductFormModal component
import ProductTable from '../ProductTable/ProductTable';
import SellerProfile from '../SellerProfile/SellerProfile';
import { useLocation, useNavigate } from 'react-router-dom';
import'./Home.css';

function Home() {
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const sellerUsername = location.state.id; // Extract sellerUsername from location.state

    const openAddressModal = () => {
        setShowAddressModal(true);
    };
    const viewProfile = () => {
        navigate(`/profile/${sellerUsername}`);
      };

    const closeAddressModal = () => {
        setShowAddressModal(false);
    };

    const openProductModal = () => {
        setShowProductModal(true);
    };

    const closeProductModal = () => {
        setShowProductModal(false);
    };

    return (
        <div className="homepage">
            <h1>Hello {sellerUsername}!!</h1>
            <div className="button-group">
                <button className="btn" onClick={openAddressModal}>Add Address</button>
                <button className="btn" onClick={openProductModal}>Add Product</button>
                <button className="btn" onClick={viewProfile}>View Profile</button>
            </div>
            {/* Render the AddressFormModal component */}
            <AddressFormModal showModal={showAddressModal} closeModal={closeAddressModal} sellerUsername={sellerUsername} />
            {/* Render the ProductFormModal component */}
            <ProductFormModal showModal={showProductModal} closeModal={closeProductModal} sellerUsername={sellerUsername} />
            {/* <SellerProfile sellerId={sellerUsername} /> */}
            <ProductTable sellerId={sellerUsername} />
        </div>
    );
}

export default Home;
