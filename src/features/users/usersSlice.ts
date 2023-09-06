/* eslint-disable no-param-reassign */
import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserStatusTypes, UsersState } from './usersReducerTypes';
import { getAuthToken } from '../../api/auth';
import { getAuthEmailToken } from '../../api/authByEmail';
import { registrationCustomer } from '../../api/registration';
import { loginMeCustomer } from '../../api/login';
import { LoginData } from '../../api/authTypes';
import { deleteMailToken } from '../../api/cookieToken';
import { ICustomerDraft } from '../../types/customerTypes';
import { updateCustomer } from '../../api/updateCustomer';
import { IDataForUpdate } from '../../pages/customerProfile/type';

const initialState: UsersState = {
  user: null,
  status: null,
  message: null,
  isAuth: false,
};

export const fetchAuthToken = createAsyncThunk(
  'users/fetchAuthToken',
  async () => {
    const response = await getAuthToken();
    return response;
  }
);

export const fetchAuthEmailToken = createAsyncThunk(
  'users/fetchAuthEmailToken',
  async (loginData: LoginData, thunkAPI) => {
    try {
      return await getAuthEmailToken(loginData);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
    return '';
  }
);

export const fetchUpdateCustomerData = createAsyncThunk(
  'users/fetchUpdateCustomer',
  async (customerUpdateData: IDataForUpdate, thunkAPI) => {
    let response = null;
    try {
      response = await updateCustomer(customerUpdateData);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
    return response;
  }
);

export const fetchRegisterCustomer = createAsyncThunk(
  'users/fetchRegisterCustomer',
  async (newCustomerData: ICustomerDraft, thunkAPI) => {
    let response = null;
    try {
      response = await registrationCustomer(newCustomerData);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
    return response;
  }
);

export const fetchLoginMeCustomer = createAsyncThunk(
  'users/fetchLoginMeCustomer',
  async (loginData: LoginData, thunkAPI) => {
    try {
      return await loginMeCustomer(loginData);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
    return '';
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.status = null;
      state.message = null;
      state.isAuth = false;
      deleteMailToken('mail_token');
    },

    resetStatus: (state) => {
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginMeCustomer.pending, (state) => {
        state.status = UserStatusTypes.LOADING;
      })
      .addCase(
        fetchLoginMeCustomer.fulfilled,
        (state, { payload: { customer } }) => {
          state.status = UserStatusTypes.SUCCESS;
          state.user = state.user ? { ...state.user, ...customer } : customer;
        }
      )
      .addCase(fetchLoginMeCustomer.rejected, (state, { payload }) => {
        state.status = UserStatusTypes.ERROR;
        state.message = payload;
        state.user = null;
      })
      .addCase(fetchRegisterCustomer.pending, (state) => {
        state.status = UserStatusTypes.LOADING;
      })
      .addCase(
        fetchRegisterCustomer.fulfilled,
        (state, { payload: { customer } }) => {
          state.status = UserStatusTypes.SUCCESS;
          state.user = state.user ? { ...state.user, ...customer } : customer;
        }
      )
      .addCase(fetchRegisterCustomer.rejected, (state, { payload }) => {
        state.status = UserStatusTypes.ERROR;
        state.message = payload;
        state.user = null;
      })
      .addCase(fetchUpdateCustomerData.pending, (state) => {
        state.status = UserStatusTypes.LOADING;
      })
      .addCase(
        fetchUpdateCustomerData.fulfilled,
        (state, { payload: { customer } }) => {
          state.status = UserStatusTypes.SUCCESS;
          state.user = state.user ? { ...state.user, ...customer } : customer;
        }
      )
      .addCase(fetchUpdateCustomerData.rejected, (state, { payload }) => {
        state.status = UserStatusTypes.ERROR;
        state.message = payload;
        state.user = null;
      });
  },
});

export const { reset, resetStatus } = usersSlice.actions;
export default usersSlice.reducer;
