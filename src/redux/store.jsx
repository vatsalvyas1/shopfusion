import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Make sure the path is correct

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
