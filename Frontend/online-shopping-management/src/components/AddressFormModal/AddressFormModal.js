// AddressFormModal.js
import React from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import './AddressFormModal.css';

const AddressFormModal = ({ showModal, closeModal, sellerUsername }) => {
  const [addressData, handleChange] = useForm({
    streetAddress: '',
    district: '',
    city: '',
    country: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting address for seller:', sellerUsername); // Log the seller username
      const response = await axios.post('http://localhost:3000/api/sellers/address', {
        seller_username: sellerUsername,
        ...addressData,
      });
      console.log('Address data submitted:', response.data);
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting address:', error);
    }
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} role="dialog" aria-labelledby="modal-title">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal-title" tabIndex="-1">Add Address</h5>
            <button type="button" className="close" onClick={closeModal} aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="streetAddress"
                value={addressData.streetAddress}
                onChange={handleChange}
                placeholder="Street Address"
                required
              />
              <input
                type="text"
                name="district"
                value={addressData.district}
                onChange={handleChange}
                placeholder="District"
                required
              />
              <input
                type="text"
                name="city"
                value={addressData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
              <input
                type="text"
                name="country"
                value={addressData.country}
                onChange={handleChange}
                placeholder="Country"
                required
              />
              <button type="submit">Save Address</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressFormModal;
