import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import productsReducer from '../features/products/productsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
