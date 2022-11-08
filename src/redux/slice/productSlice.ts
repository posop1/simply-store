import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { items } from '../../../db'
import { IProduct } from '../../types'

interface ProductsState {
  products: IProduct[]
  bin: IProduct[]
  fullPrice: number
}

const initialState: ProductsState = {
  products: items,
  bin: [],
  fullPrice: 0
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleBin(state, action: PayloadAction<number>) {
      const toggleProduct = state.products.find((product) => product.id === action.payload)

      if (toggleProduct) {
        state.bin.push(toggleProduct)
        state.fullPrice += toggleProduct.price
      }
    }
  }
})

export const { toggleBin } = productSlice.actions
export default productSlice.reducer
