import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { updateCart } = cart.actions;

export default cart.reducer;
