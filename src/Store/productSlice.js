import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
})

const initialState = {
  data: [],
  status: STATUSES.IDLE,
  // error: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
          state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action)
          state.status = STATUSES.IDLE;
          state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
          state.status = STATUSES.ERROR;
    })
  }
})

export default productSlice.reducer;

//async api call
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const data = await axios.get('https://fakestoreapi.com/products');
  // console.log(data)
  return data.data;
})