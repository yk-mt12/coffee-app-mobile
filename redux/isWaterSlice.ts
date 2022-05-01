import { createSlice } from '@reduxjs/toolkit';

export type isWaterState = {
  isWater: boolean;
};

export const initialState: isWaterState = {
  isWater: false,
};

export const isWaterSlice = createSlice({
  name: 'isWater',
  initialState,
  reducers: {
    updateIsWater: (state) => {
      state.isWater = !state.isWater;
    },
  },
});

export const { updateIsWater } = isWaterSlice.actions;

export default isWaterSlice.reducer;
