import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { items } from '../../../db'
import { IProduct } from '../../types'

interface ProductsState {
  products: IProduct[]
  bin: IProduct[]
}

const initialState: ProductsState = {
  products: items,
  bin: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleBin(state, action: PayloadAction<number>) {
      const toggleProduct = state.products.find((product) => product.id === action.payload)
      if (toggleProduct) {
        state.bin.push(toggleProduct)
      }
    }
  }
})

export const { toggleBin } = productSlice.actions
export default productSlice.reducer
