import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        data: JSON.parse(localStorage.getItem('cart'))||[]
    },
    reducers:{
        addToCart : (state, action)=>{
            const itemInCart = state.data.find(item=>item.id===action.payload)
              if(itemInCart!== undefined && itemInCart.qty > 0){
                itemInCart.qty++;                    
                }else{
                    const newItem = {id:action.payload,qty:1}
                  state.data= [...state.data,newItem]
              }

        }
    }}
);

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer