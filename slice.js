import { configureStore, createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        editCart(state, action) {
            return  state.filter((item) => item.id !== action.payload.id)
          }
    }
})

const store = configureStore({
    reducer: { cart: cartSlice.reducer },
})

store.subscribe(() => {
    console.log("change", store.getState())

    
})

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
store.dispatch(cartSlice.actions.addToCart({ id: 4, qty: 10 }));
store.dispatch(cartSlice.actions.editCart({ id: 2}));