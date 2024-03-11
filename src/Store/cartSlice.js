import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.products.push(action.payload);
        },
        remove(state, action) {
            // return state.products.filter((item) => item.id !== action.payload);
          return { ...state, products: state.products.filter((item) => item.id !== action.payload) };
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;