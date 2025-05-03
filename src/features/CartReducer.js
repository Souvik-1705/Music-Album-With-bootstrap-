

function CartReducer(state, action) {
    switch (action.type) {
      case 'Add':
        const existingItem = state.find(item => item.id === action.product.id);
        return existingItem
          ? state.map(item =>
              item.id === action.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state, { ...action.product, quantity: 1 }];
  
      case 'Remove':
        return state.filter(item => item.id !== action.product.id);
  
      case 'LOAD':
     
        return state.some(item => item.id === action.product.id)
          ? state
          : [...state, action.product];
  
      default:
        return state;
    }
  }
  
  export default CartReducer;