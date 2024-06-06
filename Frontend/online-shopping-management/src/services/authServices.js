import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = async (seller_username, seller_password) => {
  return axios.post(`${API_URL}/`, { seller_username, seller_password });
};

export const signup = async (seller_username, seller_password) => {
  return axios.post(`${API_URL}/signup`, { seller_username, seller_password });
};
