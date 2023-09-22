/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICartState } from './types';
import { getMyActiveCart } from '../../api/cart/getMyActiveCart';
import { getCartFields } from './helpers/getCartFields';
import { getAnonimCartById } from '../../api/cart/getAnonimCartById';
import { IDeleteMyCart, deleteMyCart } from '../../api/cart/deleteMyCart';
import {
  IRemoveProduct,
  removeProduct,
} from '../../api/cart/removeProductFromCart';
import {
  IAddProductToCartAction,
  addProductToAnonimousCart,
} from '../../api/cart/addProductAnonimCart';
import { addProductToMyCart } from '../../api/cart/addProductToMyCart';
import { deleteAnonimousCart } from '../../api/cart/deleteAnonimousCart';
import {
  IChangeProductQuantity,
  changeProductQuantity,
} from '../../api/cart/changeProductQuanity';
import { removeProductFromAnonimousCart } from '../../api/cart/removeProductFromAnonimousCart';
import { changeProductQuantityInAnomimousCart } from '../../api/cart/changeProductQuanityInAnonimousCart';
import { IAddDiscoutCode } from '../../api/cart/types';
import { addDiscountCodeAnonim } from '../../api/cart/addDiscountCodeAnonim';
import { addDiscountCode } from '../../api/cart/addDiscountCode';

const initialState: ICartState = {
  cart: null,
  cartFields: null,
  message: null,
};

export const fetchProductToAnonimousCart = createAsyncThunk(
  'cart/fetchProductToAnonimousCart',
  async (actionData: IAddProductToCartAction, { dispatch }) => {
    const newCartData = await addProductToAnonimousCart(actionData);
    dispatch(setAllCartData(newCartData));
    dispatch(setCartFieldsData(newCartData));
  }
);

export const fetchProductToMyCart = createAsyncThunk(
  'cart/fetchProductToMyCart',
  async (actionData: IAddProductToCartAction, { dispatch }) => {
    const newCartData = await addProductToMyCart(actionData);

    dispatch(setAllCartData(newCartData));
    dispatch(setCartFieldsData(newCartData));
  }
);

export const fetchAnonCart = createAsyncThunk(
  'cart/fetchAnonCart',
  async (_payload, { dispatch }) => {
    let data = null;
    try {
      data = await getAnonimCartById();
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(resetErrorMsg());
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
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
    dispatch(resetErrorMsg());
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

export const fetchDeleteAnonimousCart = createAsyncThunk(
  'cart/fetchDeleteAnonimousCart',
  async (cartData: IDeleteMyCart, { dispatch }) => {
    let data = null;
    try {
      data = await deleteAnonimousCart(cartData);
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
  }
);

export const deleteAnonimousCartProduct = createAsyncThunk(
  'cart/deleteAnonimousCartProduct',
  async (cartData: IRemoveProduct, { dispatch }) => {
    let data = null;
    try {
      data = await removeProductFromAnonimousCart(cartData);
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

export const changeProductCartQuantity = createAsyncThunk(
  'cart/changeProductCartQuantity',
  async (cartData: IChangeProductQuantity, { dispatch }) => {
    let data = null;
    try {
      await changeProductQuantity(cartData);
      data = await getMyActiveCart();
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
  }
);

export const fetchChangeProductQuantityInAnonimousCart = createAsyncThunk(
  'cart/fetchChangeProductQuantityInAnonimousCart',
  async (cartData: IChangeProductQuantity, { dispatch }) => {
    let data = null;
    try {
      await changeProductQuantityInAnomimousCart(cartData);
      data = await getAnonimCartById();
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    dispatch(setAllCartData(data));
    dispatch(setCartFieldsData(data));
  }
);

export const fetchApplyPromoCodeToAnonimousCart = createAsyncThunk(
  'cart/fetchApplyPromoCodeToAnonimousCart',
  async (cartData: IAddDiscoutCode, { dispatch }) => {
    let data = null;
    try {
      data = await addDiscountCodeAnonim(cartData);
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    if (data) {
      dispatch(resetErrorMsg());
      dispatch(setAllCartData(data));
      dispatch(setCartFieldsData(data));
    }
  }
);

export const fetchApplyPromoCodeToAuthCart = createAsyncThunk(
  'cart/fetchApplyPromoCodeToAuthCart',
  async (cartData: IAddDiscoutCode, { dispatch }) => {
    let data = null;
    try {
      data = await addDiscountCode(cartData);
    } catch (e) {
      if (!(e instanceof AxiosError)) throw e;
      dispatch(setErrorMsg(e.response?.data.message));
    }
    if (data) {
      dispatch(resetErrorMsg());
      dispatch(setAllCartData(data));
      dispatch(setCartFieldsData(data));
    }
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
    resetErrorMsg: (state) => {
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

export const {
  resetErrorMsg,
  resetCartData,
  setAllCartData,
  setCartFieldsData,
  setErrorMsg,
} = cartSlice.actions;
export default cartSlice.reducer;
