import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import currentProductReducer from '../features/products/currentProductSlice';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    currentProduct: currentProductReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
