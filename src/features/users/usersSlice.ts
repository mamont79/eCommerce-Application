/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from './usersReducerTypes';
import { RootState } from '../../store/store';

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
