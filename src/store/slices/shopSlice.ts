import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../types";
import {fetchShopProducts} from "../actions/fetchShopProducts";
import {notify} from "../../components/Toast";

type Shop = {
  products: Product[],
  orderProducts: Product[]
}

const initialState: Shop = {
  products: [],
  orderProducts: []
}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const isOrder = state.orderProducts.some(product => product.id === action.payload.id)
      if (!isOrder) {
        state.orderProducts.push(action.payload)
        notify('The product has been added to the cart', 'success')
      } else {
        notify('You have already added this product to the cart', 'warning')
        return
      }
    },
    deleteFromCart(state, action: PayloadAction<Product>) {
      state.orderProducts = state.orderProducts.filter(product => product.id !== action.payload.id)
      notify('The order has been deleted', 'success')
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShopProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
  }
})
export const {addToCart, deleteFromCart} = shopSlice.actions;
export default shopSlice.reducer;