import {createSlice} from "@reduxjs/toolkit";
import {Product} from "../../types";
import {fetchShopProducts} from "../actions/fetchShopProducts";

type Shop = {
  products: Product[]
}

const initialState: Shop = {
  products: []
}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchShopProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
  }
})

export default shopSlice.reducer;