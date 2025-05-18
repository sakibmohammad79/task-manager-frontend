// import { baseApi } from "./api/baseApi";

// export const reducer = { [baseApi.reducerPath]: baseApi.reducer };


import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/card/cardslice";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer, // <- add this
});
