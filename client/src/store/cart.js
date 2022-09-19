import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    products: [],
    Quantity: 0,
    price:0
  },
  reducers: {
    replacecart: (state, action) => {
      state.products = action.payload.products;
      state.Quantity = action.payload.Quantity;
      state.price = action.payload.totalPrice;
    },
  },
});

export const cartactions = cart.actions;

export default cart;