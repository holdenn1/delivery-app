import React from "react";

export type Children = {
  children: React.ReactNode
}

export type ShopNavigation = {
  id: number,
  shop: string
  link: string
}

export type InitialOrderFormValues = {
  name: string,
  email: string,
  phone: string,
  address: string,
}

export type Product = {
  id: string
  title: string
  price: number
  cover: string
}

export type ProductInCart = {
  id: string
  title: string
  price: number
  sumAmountProducts: number
  cover: string
  amount: number
}

