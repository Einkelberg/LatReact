import { legacy_createStore } from "@reduxjs/toolkit";

//reducer
const cartReducer = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

//store
const store = legacy_createStore(cartReducer);
console.log("on create" , store.getState());

//subscribe
store.subscribe(() => {
  console.log("on change" , store.getState());
});
//dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: { id: 2, qty: 10 },
};

store.dispatch(action1);
