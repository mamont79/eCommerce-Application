/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ICartState } from './types';
import { getMyActiveCart } from '../../api/cart/getMyActiveCart';
import { UserStatusTypes } from '../users/usersReducerTypes';

const initialState: ICartState = {
  cart: null,
  status: null,
  message: null,
};

export const fetchMeActiveCart = createAsyncThunk(
  'cart/fetchMeActiveCart',
  async () => {
    try {
      return await getMyActiveCart();
    } catch (error) {
      if (error instanceof AxiosError) {
        // const message =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();
        // return thunkAPI.rejectWithValue(message);
      }
    }
    return '';
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => {
      state.cart = null;
      state.status = null;
      state.message = null;
    },

    resetStatus: (state) => {
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeActiveCart.pending, (state) => {
        state.status = UserStatusTypes.LOADING;
      })
      .addCase(fetchMeActiveCart.rejected, (state, payload) => {
        state.status = UserStatusTypes.ERROR;
        state.message = payload;
        state.cart = null;
      })
      .addCase(fetchMeActiveCart.fulfilled, (state, { payload }) => {
        state.status = UserStatusTypes.SUCCESS;
        state.cart = payload;
      });
  },
});

export const { reset, resetStatus } = cartSlice.actions;
export default cartSlice.reducer;
