import { createSlice } from '@reduxjs/toolkit';

export type AmountState = {
  amount: number;
};

export const initialState: AmountState = {
  amount: 0,
};

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { updateAmount } = amountSlice.actions;

export default amountSlice.reducer;
