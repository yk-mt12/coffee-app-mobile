import { configureStore } from '@reduxjs/toolkit';
import amountReducer from './amountSlice';
import waterReducer from './waterSlice';
import ratioReducer from './ratioSlice';
import isWaterReducer from './isWaterSlice';

export const store = configureStore({
  reducer: {
    amount: amountReducer,
    ratio: ratioReducer,
    water: waterReducer,
    isWater: isWaterReducer,
  },
});
