import { combineReducers } from "redux";
import productSlice from "./product/productSlice";

const reducers = combineReducers({
    product: productSlice.reducer,
});

export default reducers;
