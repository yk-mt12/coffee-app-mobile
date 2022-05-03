import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './coffeeSlice';
import timerReducer from './timerSlice';

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    timer: timerReducer,
  },
});
