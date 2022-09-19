import { configureStore } from "@reduxjs/toolkit";
import webtoken from "./webtoken";
import cart from "./cart";
import uislice from "./uislice";

const store = configureStore({
  reducer: { uislice:uislice.reducer,webtoken: webtoken.reducer, cart: cart.reducer },
});

export default store;
