// Home.js
import React, { useState } from 'react';
import AddressFormModal from './AddressFormModal'; // Import the AddressFormModal component
import { useLocation } from 'react-router-dom';

function Home() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="homepage">
            <h1>Hello {location.state.id} and welcome to the home</h1>
            <button onClick={openModal}>Add Address</button>
            {/* Render the AddressFormModal component */}
            <AddressFormModal showModal={showModal} closeModal={closeModal} />
        </div>
    );
}

export default Home;
