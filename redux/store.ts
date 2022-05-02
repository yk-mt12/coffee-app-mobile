import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './coffeeSlice';

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
});
