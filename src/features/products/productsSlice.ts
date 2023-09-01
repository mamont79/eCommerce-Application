/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { catalogProducts } from '../../api/catalog';
import { ProductState } from './productsType';

const initialState: ProductState = {
  productsData: [],
};

export const fetchCatalog = createAsyncThunk(
  'products/fetchCatalog',
  async (_payload, { dispatch }) => {
    const data = await catalogProducts();
    dispatch(setProductsData(data));
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: (state) => {
      state.productsData = [];
    },
    setProductsData: (state, action) => {
      state.productsData = [...action.payload];
    },
  },
});

export const { reset, setProductsData } = productsSlice.actions;
export default productsSlice.reducer;
