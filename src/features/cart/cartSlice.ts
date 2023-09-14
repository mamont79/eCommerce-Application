/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICartState } from './types';
import { getMyActiveCart } from '../../api/cart/getMyActiveCart';
import { getCartFields } from './helpers/getCartFields';

const initialState: ICartState = {
  cart: null,
  cartFields: null,
  status: null,
  message: null,
};

export const fetchMeActiveCart = createAsyncThunk(
  'cart/fetchMeActiveCart',
  async (_payload, { dispatch }) => {
    const data = await getMyActiveCart();
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
      state.status = null;
      state.message = null;
    },
    setAllCartData: (state, action) => {
      state.cart = action.payload;
    },
    setCartFieldsData: (state, action) => {
      state.cartFields = getCartFields(action.payload);
    },
  },
});

export const { resetCartData, setAllCartData, setCartFieldsData } =
  cartSlice.actions;
export default cartSlice.reducer;
