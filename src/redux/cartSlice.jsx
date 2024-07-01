import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
console.log(initialState);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = {
                ...action.payload,
                time: new Date(action.payload.time).toISOString() // Convert to ISO string
            };
            state.push(item);
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity(state, action) {
            return state.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },
        decrementQuantity(state, action) {
            return state.map(item => {
                if (item.quantity > 1 && item.id === action.payload) {
                    item.quantity--;
                }
                return item;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
