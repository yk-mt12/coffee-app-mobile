import { createSlice } from '@reduxjs/toolkit';
import { CoffeeType } from './type';

export const initialState: CoffeeType = {
  amount: 0,
  water: 0,
  ratio: 15,
  iceAmount: 0,
  iceWater: 0,
  iceRatio: 15,
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
    updateIceAmount: (state, action) => {
      state.iceAmount = action.payload;
    },
    updateIceWater: (state, action) => {
      state.iceWater = action.payload;
    },
    calculateIceCoffeeAmount: (state, action) => {
      state.iceAmount = Math.round((action.payload / state.iceRatio) * 2);
    },
    calculateIceCoffeeWater: (state, action) => {
      state.iceWater = Math.round((action.payload * state.iceRatio) / 2);
    },
  },
});

export const {
  updateIsWater,
  updateWater,
  updateRatio,
  updateAmount,
  updateIceAmount,
  updateIceWater,
  calculateAmount,
  calculateWater,
  calculateIceCoffeeWater,
  calculateIceCoffeeAmount,
} = CoffeeSlice.actions;

export default CoffeeSlice.reducer;
