/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDiscountCodes } from '../../api/cart/getDiscountCodes';
import { DiscountCodesState } from './types';

const initialState: DiscountCodesState = {
  discountData: [],
};

export const fetchDiscountCodes = createAsyncThunk(
  'discount/fetchDiscountCodes',
  async (_payload, { dispatch }) => {
    const data = await getDiscountCodes();
    dispatch(setDiscountCodesData(data));
  }
);

export const discountCodesSlice = createSlice({
  name: 'discountCodes',
  initialState,
  reducers: {
    reset: (state) => {
      state.discountData = [];
    },
    setDiscountCodesData: (state, { payload }) => {
      state.discountData = [...payload];
    },
  },
});

export const { reset, setDiscountCodesData } = discountCodesSlice.actions;

export default discountCodesSlice.reducer;
