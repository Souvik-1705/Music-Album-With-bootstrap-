import axios from 'axios';
import { sanitizeEmail } from '../utils/sanitizeEmail';

const API_BASE = 'https://crudcrud.com/api/a8f3d92fb3db41cfbff983eacadc0951'; 

export const addCartItem = async (item, email) => {
  const userKey = sanitizeEmail(email);
  try {
    const res = await axios.post(`${API_BASE}/cart${userKey}`, item);
    return res.data;
  } catch (err) {
    console.error('Error adding to cart:', err);
  }
};

export const fetchCartItems = async (email) => {
  const userKey = sanitizeEmail(email);
  try {
    const res = await axios.get(`${API_BASE}/cart${userKey}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching cart:', err);
    return [];
  }
};

export const removeCartItem = async (itemId, email) => {
  const userKey = sanitizeEmail(email);
  try {
    await axios.delete(`${API_BASE}/cart${userKey}/${itemId}`);
  } catch (err) {
    console.error('Error deleting item:', err);
  }
};
