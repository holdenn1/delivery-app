import React from "react";

export type Children = {
  children: React.ReactNode
}

export type ShopNavigation = {
  id: number,
  shop: string
  link: string
}

type OrderProduct = {
  productName: string,
  amountProducts: number,
}

export type InitialOrderFormValues = {
  name: string,
  email: string,
  phone: string,
  address: string,
  orderProducts: OrderProduct[],
  amountOrder: number
}

export type Product = {
  id: string
  title: string
  price: string
  cover: string
}

