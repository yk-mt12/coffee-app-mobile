import { createSlice } from '@reduxjs/toolkit';

import { screenType } from './type';

export const initialState: screenType = {
  nowScreen: 'normal',
};

export const ScreenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    changeScreen: (state, action) => {
      state.nowScreen = action.payload;
    },
  },
});

export const { changeScreen } = ScreenSlice.actions;

export default ScreenSlice.reducer;
