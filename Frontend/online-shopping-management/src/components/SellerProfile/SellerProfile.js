import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SellerProfile.css';

const SellerProfile = () => {
  const { sellerUsername } = useParams();
  const [seller, setSeller] = useState(null);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/sellers/${sellerUsername}`);
        setSeller(response.data);
        const sellerId = response.data._id;

        const addressResponse = await axios.get(`http://localhost:3000/api/address/${sellerId}`);
        setAddresses(addressResponse.data);
      } catch (error) {
        console.error('Error fetching seller profile or addresses:', error);
      }
    };

    fetchSeller();
  }, [sellerUsername]);

  if (!seller || addresses.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="seller-profile">
      <h2>Seller Profile</h2>
      <div className="seller-details">
        <p><strong>Username:</strong> {seller.seller_username}</p>
        <p><strong>Display Name:</strong> {seller.seller_display_name}</p>
      </div>
      <div className="address-details">
        {addresses.map((address) => (
          <div key={address._id} className="address-card">
            <p><strong>Street Address:</strong> {address.streetAddress}</p>
            <p><strong>City:</strong> {address.city}</p>
            <p><strong>District:</strong> {address.district}</p>
            <p><strong>Country:</strong> {address.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerProfile;
