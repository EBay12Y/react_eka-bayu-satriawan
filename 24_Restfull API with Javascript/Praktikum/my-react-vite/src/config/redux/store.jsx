import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer"
import thunkMiddleware from "redux-thunk";

const store = configureStore({
    reducer: reducers,
    middleware: [thunkMiddleware],
});

export default store;