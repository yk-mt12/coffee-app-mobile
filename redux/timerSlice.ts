import { createSlice } from '@reduxjs/toolkit';

import { TimerType } from './type';

const initialState: TimerType = {
  isRun: false,
  isReset: false,
};

export const TimerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      state.isRun = true;
    },
    stop: (state) => {
      state.isRun = false;
    },
    reset: (state) => {
      state.isRun = false;
    },
  },
});

export const { start, stop, reset } = TimerSlice.actions;

export default TimerSlice.reducer;
