/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cart } from '@commercetools/platform-sdk';
import { ICartState } from './types';
import { getCartFields } from './helpers/getCartFields';
import {
  IAddProductToCartAction,
  addProductAnonimCart,
} from '../../api/cart/addProductAnonimCart';
import { getAnonimToken } from '../../api/authAnonim';
import { getAnonimCartById } from '../../api/cart/getAnonimCartById';

const initialState: ICartState = {
  cart: null,
  cartFields: null,
  message: null,
};

export const addProductToAnonimCart = createAsyncThunk(
  'cart/addProductAnonimCart',
  async (
    actionData: Pick<
      IAddProductToCartAction,
      'productId' | 'productVariantId'
    > &
      Partial<Pick<IAddProductToCartAction, 'cartId' | 'cartVersion'>>,
    { dispatch }
  ) => {
    let { cartId, cartVersion } = actionData;
    let anonimousCustomerCartData: Cart | null = null;

    if (!cartId || !cartVersion) {
      await getAnonimToken();
      anonimousCustomerCartData = await getAnonimCartById();
    }

    if (anonimousCustomerCartData) {
      const { id, version } = anonimousCustomerCartData;
      cartId = id;
      cartVersion = version;
    }

    if (cartId === undefined || cartVersion === undefined)
      throw new Error('Cart id or Cart version is undefined.');

    const newCartData = await addProductAnonimCart({
      ...actionData,
      cartId,
      cartVersion,
    });

    dispatch(setAllCartData(newCartData));
    dispatch(setCartFieldsData(newCartData));
  }
);

export const fetchMeActiveCart = createAsyncThunk(
  'cart/fetchMeActiveCart',
  async (_payload, { dispatch }) => {
    let data = null;
    try {
      data = await getAnonimCartById();
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
  }
);

export const cartSlice = createSlice({
  name: 'anonimCart',
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
