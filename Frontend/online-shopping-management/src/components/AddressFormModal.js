// AddressFormModal.js
import React, { useState } from 'react';

const AddressFormModal = ({ showModal, closeModal }) => {
  const [addressData, setAddressData] = useState({
    streetAddress: '',
    district: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Address data submitted:', addressData);
    closeModal(); // Close the modal after submission
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Address</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span>×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Input fields for streetAddress, district, city, and country */}
              {/* Example: */}
              <input
                type="text"
                name="streetAddress"
                value={addressData.streetAddress}
                onChange={handleChange}
                placeholder="Street Address"
                required
              />
              {/* Other input fields go here */}
              <button type="submit">Save Address</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressFormModal;
