import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(item => item.id.toString() === action.payload.id.toString());
      if (index !== -1) {
        state.total -= state.cart[index].price;
        state.cart.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
    updatePrice: (state, action) => {
      const { id, newPrice } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        state.total += newPrice - item.price;
        item.price = newPrice;
      }
    }
  }
});

export const { addToCart, removeFromCart, clearCart, updatePrice } = cartSlice.actions;

export default cartSlice.reducer;
