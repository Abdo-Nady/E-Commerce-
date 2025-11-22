export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalCount = (state) => state.cart.totalCount;

export const selectCartTotalPrice = (state) => {
    return state.cart.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
};



export const selectIsItemInCart = (state, itemId) => {
    return state.cart.items.some(item => item.id === itemId);
};