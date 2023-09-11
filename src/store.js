import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./feature/CartSlice";
import productSlice from "./feature/ProductSlice";

const store=configureStore({
    reducer:{
        cartData:CartSlice,
        product:productSlice
    }
})
export default store;