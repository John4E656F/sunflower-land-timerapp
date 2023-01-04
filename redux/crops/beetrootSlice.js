import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Beetroot',
  isActive: false,
  value: 14400,
};

export const beetrootSlice = createSlice({
  name: 'beetroot',
  initialState,
  reducers: {
    startbeetrootCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startbeetrootCounter } = beetrootSlice.actions;
export default beetrootSlice.reducer;
