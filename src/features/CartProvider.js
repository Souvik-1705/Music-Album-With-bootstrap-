

import React, { createContext, useReducer, useEffect, useContext } from 'react';
import CartReducer from './CartReducer';
import { fetchCartItems, addCartItem, removeCartItem } from './CartApi';
import AuthContext from '../store/AuthContext';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, []);
  const authCtx = useContext(AuthContext);

  
  useEffect(() => {
    const loadCart = async () => {
      if (authCtx.email) {
        const items = await fetchCartItems(authCtx.email);
        items.forEach(item => {
          dispatch({ type: 'LOAD', product: item });
        });
      }
    };
    loadCart();
  }, [authCtx.email]);


  const enhancedDispatch = async (action) => {
    if (action.type === 'Add') {
      dispatch(action);
      await addCartItem({ ...action.product, quantity: 1 }, authCtx.email); 
    } else if (action.type === 'Remove') {
      dispatch(action); 
      if (action.product._id) {
        await removeCartItem(action.product._id, authCtx.email); 
      }
    } else {
      dispatch(action);
    }
  };

  return (
    <CartContext.Provider value={{ cart, dispatch: enhancedDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
