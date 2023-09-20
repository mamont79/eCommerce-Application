/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cart } from '@commercetools/platform-sdk';
import { IAddProductToCartPayload, ICartState } from './types';
import { getMyActiveCart } from '../../api/cart/getMyActiveCart';
import { getCartFields } from './helpers/getCartFields';
import { addProductToMyCart } from '../../api/cart/addProductToMyCart';
import { getAnonimToken } from '../../api/authAnonim';
import { getAnonimCartById } from '../../api/cart/getAnonimCartById';
import { IDeleteMyCart, deleteMyCart } from '../../api/cart/deleteMyCart';
import {
  IRemoveProduct,
  removeProduct,
} from '../../api/cart/removeProductFromCart';

const initialState: ICartState = {
  cart: null,
  cartFields: null,
  message: null,
};

export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async (actionData: IAddProductToCartPayload, { dispatch }) => {
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

    const newCartData = await addProductToMyCart({
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
      data = await getMyActiveCart();
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
  }
);

export const deleteMeActiveCart = createAsyncThunk(
  'cart/deleteMeActiveCart',
  async (cartData: IDeleteMyCart, { dispatch }) => {
    let data = null;
    try {
      data = await deleteMyCart(cartData);
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
  }
);

export const deleteCartProduct = createAsyncThunk(
  'cart/deleteCartProduct',
  async (cartData: IRemoveProduct, { dispatch }) => {
    let data = null;
    try {
      data = await removeProduct(cartData);
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
  extraReducers: (builder) => {
    builder.addCase(deleteMeActiveCart.fulfilled, (state) => {
      state.cart = null;
      state.cartFields = null;
      state.message = null;
    });
  },
});

export const { resetCartData, setAllCartData, setCartFieldsData, setErrorMsg } =
  cartSlice.actions;
export default cartSlice.reducer;
