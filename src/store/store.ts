import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
