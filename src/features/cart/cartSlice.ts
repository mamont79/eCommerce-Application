/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICartState } from './types';
import { getMyActiveCart } from '../../api/cart/getMyActiveCart';
import { getCartFields } from './helpers/getCartFields';

const initialState: ICartState = {
  cart: null,
  cartFields: null,
  message: null,
};

export const fetchMeActiveCart = createAsyncThunk(
  'cart/fetchMeActiveCart',
  async (_payload, { dispatch }) => {
    let data = null;
    try {
      data = await getMyActiveCart();
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCartData: (state) => {
      state.cart = null;
      state.cartFields = null;
      state.message = null;
    },
    setErrorMsg: (state, { payload }) => {
      state.message = payload;
    },
    setAllCartData: (state, action) => {
      state.cart = action.payload;
    },
    setCartFieldsData: (state, action) => {
      state.cartFields = getCartFields(action.payload);
    },
  },
});

export const { resetCartData, setAllCartData, setCartFieldsData, setErrorMsg } =
  cartSlice.actions;
export default cartSlice.reducer;
