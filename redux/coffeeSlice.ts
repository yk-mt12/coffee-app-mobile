import { createSlice } from '@reduxjs/toolkit';
import { CoffeeType } from './type';

export const initialState: CoffeeType = {
  amount: 0,
  water: 0,
  ratio: 15,
  isWater: false,
};

export const CoffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
    updateWater: (state, action) => {
      state.water = action.payload;
    },
    updateRatio: (state, action) => {
      state.ratio = action.payload;
    },
    updateIsWater: (state) => {
      state.isWater = !state.isWater;
    },
    calculateAmount: (state, action) => {
      state.amount = Math.round(action.payload / state.ratio);
    },
    calculateWater: (state, action) => {
      state.water = Math.round(action.payload * state.ratio);
    },
    calculateIceCoffeeAmount: (state, action) => {
      state.amount = Math.round((action.payload / state.ratio) * 2);
    },
    calculateIceCoffeeWater: (state, action) => {
      state.water = Math.round((action.payload * state.ratio) / 2);
    },
  },
});

export const {
  updateIsWater,
  updateWater,
  updateRatio,
  updateAmount,
  calculateAmount,
  calculateWater,
  calculateIceCoffeeWater,
  calculateIceCoffeeAmount,
} = CoffeeSlice.actions;

export default CoffeeSlice.reducer;
