/* eslint-disable no-param-reassign */
import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserStatusTypes, UsersState } from './usersReducerTypes';

// import { RootState } from '../../store/store';
import { getAuthToken } from '../../api/auth';
import { getAuthEmailToken } from '../../api/authByEmail';
import { loginMeCustomer } from '../../api/login';
import { LoginData } from '../../api/authTypes';

const initialState: UsersState = {
  user: null,
  status: null,
  message: null,
};

export const fetchAuthToken = createAsyncThunk(
  'users/fetchAuthToken',
  async () => {
    const response = await getAuthToken();
    // eslint-disable-next-line no-console
    console.log(response);
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
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchLoginMeCustomer.pending, (state) => {
        state.status = UserStatusTypes.LOADING;
      })
      .addCase(fetchLoginMeCustomer.fulfilled, (state, action) => {
        state.status = UserStatusTypes.SUCCESS;
        state.user = action.payload;
      })
      .addCase(fetchLoginMeCustomer.rejected, (state, action) => {
        state.status = UserStatusTypes.ERROR;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = usersSlice.actions;

// export const selectValue = (state: RootState) => state.users;

export default usersSlice.reducer;
