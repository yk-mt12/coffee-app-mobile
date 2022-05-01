import { createSlice } from '@reduxjs/toolkit';

export type ratioState = {
  ratio: number;
};

export const initialState: ratioState = {
  ratio: 0,
};

export const ratioSlice = createSlice({
  name: 'ratio',
  initialState,
  reducers: {
    updateRatio: (state, action) => {
      state.ratio = action.payload;
    },
  },
});

export const { updateRatio } = ratioSlice.actions;

export default ratioSlice.reducer;
