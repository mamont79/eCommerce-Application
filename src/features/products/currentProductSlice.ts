/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductByKey } from '../../api/getPruductByKey';
import { ProductType } from './productsType';

interface CurrentProductType {
  data: ProductType | null;
}

const initialState: CurrentProductType = {
  data: null,
};

export const fetchProductByKey = createAsyncThunk(
  'products/fetchProductByKey',
  async (productKey: string, { dispatch }) => {
    const data = await getProductByKey(productKey);
    dispatch(setCurrentProductData(data));
  }
);

export const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = null;
    },
    setCurrentProductData: (state, action) => {
      state.data = { ...action.payload };
    },
  },
});

export const { reset, setCurrentProductData } = currentProductSlice.actions;

export default currentProductSlice.reducer;
