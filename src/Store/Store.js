import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./RootReducer";

const middleWare = [logger, thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))