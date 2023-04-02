import { configureStore } from "@reduxjs/toolkit";
import counterSlice, { counterReducer } from "./counter/counterSlice";
import { productReducer } from "./product/productSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
    },
})

export default store;