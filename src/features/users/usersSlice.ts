/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersState } from './usersReducerTypes';
import { RootState } from '../../store/store';
import { getAuthToken } from '../../api/auth';
import { getAuthEmailToken } from '../../api/authByEmail';

const initialState: UsersState = {
  user: {},
  status: null,
  message: null,
  value: 0,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = usersSlice.actions;

export const selectValue = (state: RootState) => state.users.value;

export default usersSlice.reducer;

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
  async () => {
    const response = await getAuthEmailToken();
    // eslint-disable-next-line no-console
    console.log(response);
  }
);
