import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "./slices/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;