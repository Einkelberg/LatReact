import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addToCart } from "./actions/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
