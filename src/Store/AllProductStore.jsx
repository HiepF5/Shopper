import axios from 'axios'
import { create } from 'zustand'

const allProductStore = (set, get) => ({
  all_products: [],
  cart: {},
  fetch: async (url) => {
    const response = await axios.get(url)
    set({ all_products: response.data })
  },
  getDefaultCart: () => {
    let dfcart = {}
    const all_products = get().all_products
    for (let i = 0; i < all_products.length; i++) {
      dfcart[i] = 0
    }
    return dfcart
  },
  addToCart: (itemId) => {
    const currentCart = get().cart
    console.log(currentCart)
    set({
      cart: {
        ...currentCart,
        [itemId]: (currentCart[itemId] || 0) + 1
      }
    })
    // console.log(get().cart)
  },
  removeFromCart: (itemId) => {
    const currentCart = get().cart
    set({
      cart: {
        ...currentCart,
        [itemId]: (currentCart[itemId] || 0) - 1
      }
    })
  },
  getTotalCartAmount: () => {
    let totalAmount = 0
    const all_products = get().all_products
    const currentCart = get().cart
    for (const item in currentCart) {
      if (currentCart[item] > 0) {
        let itemInfo = all_products.find((product) => product.id == +item)
        totalAmount += itemInfo.new_price * currentCart[item]
      }
    }
    return totalAmount
  },
  getTotalCartItems: () => {
    let totalItem = 0
    const currentCart = get().cart
    for (const item in currentCart) {
      if (currentCart[item] > 0) {
        totalItem += currentCart[item]
      }
    }
    return totalItem
  }
})

export const useAllProduct = create(allProductStore)
