import { createSlice } from '@reduxjs/toolkit';

export type WaterState = {
  water: number;
};

export const initialState: WaterState = {
  water: 0,
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    updateWater: (state, action) => {
      state.water = action.payload
    },
  },
});

export const { updateWater } = waterSlice.actions;

export default waterSlice.reducer;
