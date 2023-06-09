import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product, ProductInCart} from "../../types";
import {fetchShopProducts} from "../actions/fetchShopProducts";
import {notify} from "../../components/Toast";


type Shop = {
  products: Product[],
  orderProducts: ProductInCart[],
}

type HandleAmount = {
  product: ProductInCart,
  newAmountValue: number
  isAdd: number
}

const initialState: Shop = {
  products: [],
  orderProducts: [],
}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const isOrder = state.orderProducts.some(product => product.id === action.payload.id)
      if (!isOrder) {
        state.orderProducts.push({...action.payload, amount: 1})
        notify('The product has been added to the cart', 'success')
      } else {
        notify('You have already added this product to the cart', 'warning')
        return
      }
    },
    deleteFromCart(state, action: PayloadAction<Product>) {
      state.orderProducts = state.orderProducts.filter(product => product.id !== action.payload.id)
      notify('The order has been deleted', 'success')
    },
    handleAmountProduct(state, action: PayloadAction<HandleAmount>) {
      if (action.payload.isAdd > action.payload.product.amount) {
        state.orderProducts.forEach(order => {
          if (order.id === action.payload.product.id) {
            order.amount = +action.payload.newAmountValue
          }
        })
      } else {
        state.orderProducts.forEach(order => {
          if (order.id === action.payload.product.id) {
            order.amount = +action.payload.newAmountValue
          }
        })
      }
    },
    cleanOrder(state) {
      state.orderProducts = []
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShopProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
  }
})
export const {addToCart, deleteFromCart, handleAmountProduct, cleanOrder} = shopSlice.actions;
export default shopSlice.reducer;