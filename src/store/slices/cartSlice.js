import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalCount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                if (existingItem.quantity < action.payload.stock) {
                    existingItem.quantity += 1;
                }
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            state.totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        incrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                if (item.quantity < item.stock) {
                    item.quantity += 1;
                    state.totalCount += 1;
                }
            }
        },

        decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalCount -= 1;
            }
        },

        removeFromCart: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                state.totalCount -= item.quantity;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalCount = 0;
        }
    }
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;