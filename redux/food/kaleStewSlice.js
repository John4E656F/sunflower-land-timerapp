import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Kale Stew',
  isActive: false,
  value: 86400,
};

export const kaleStewSlice = createSlice({
  name: 'kaleStew',
  initialState,
  reducers: {
    startkaleStewCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startkaleStewCounter } = kaleStewSlice.actions;
export default kaleStewSlice.reducer;
