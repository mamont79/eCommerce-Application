import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from '../../store/store'
import { UsersState } from './usersReducerTypes';

const initialState: UsersState = {
  user: {},
  status: null,
  message: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // login: (state) => {
    // },
    // registration: (state, action: PayloadAction<number>) => {
    // },
    // logout: (state) => {
    // },
  },
});

// export const { login, registration, logout } = usersSlice.actions

// export const selectUser = (state: RootState) => state.users.user

export default usersSlice.reducer;
