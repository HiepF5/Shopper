import axios from 'axios'
import { create } from 'zustand'
const allProductStore = (set, get) => ({
  all_products: [],
  fetch: async (url) => {
    const response = await axios.get(url)
    set({ all_products: response.data })
  }
})
export const useAllProduct = create(allProductStore)
