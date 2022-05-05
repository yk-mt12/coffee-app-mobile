import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './coffeeSlice';
import screenReducer from './screenSlice';

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    screen: screenReducer,
  },
});
