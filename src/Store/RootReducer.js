import { combineReducers } from "@reduxjs/toolkit"
import productReducer from "./Product/ProductReducer";

const rootReducer = combineReducers({
    product: productReducer
});

export default rootReducer;