import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    selectLens: (state, action) => {},
    getTotalPrice: (state) => {
      state.cart.forEach((item) => {
        state.total = state.total + item.quantity * item.product.Price;
      });
    },
  },
});

export const cartActions = cart.actions;
export const cartReducers = cart.reducer;
