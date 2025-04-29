import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

export const CartContext=createContext();

function CartProvider({children}) {
    const[cart,dispatch]=useReducer(CartReducer,[])
  return (
    <CartContext.Provider value={{cart,dispatch}}>{children}</CartContext.Provider>
  )
}

export default CartProvider;