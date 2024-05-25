import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const cartReducer = createReducer([], (builder) => {
  builder
  .addCase("ADD_TO_CART", (state, action) => {
    return [...state, action.payload];
  })
  .addCase("EDIT_CART", (state, action) => {
    return  state.filter((item) => item.id !== action.payload.id)
  })
});

const store = configureStore({
  reducer: { cart: cartReducer },
});

store.subscribe(() => {
    console.log("change", store.getState())

    
})

const addToCart = createAction("ADD_TO_CART");
const editCart = createAction("EDIT_CART");
const action3 = addToCart({ id: 2, qty: 10 });
const action6 = addToCart({ id: 4, qty: 10 });
const action4 = editCart({ id: 2});
store.dispatch(action3);
store.dispatch(action6);
store.dispatch(action4);
