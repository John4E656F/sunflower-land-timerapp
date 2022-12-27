import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 7200000,
};

export const axeSlice = createSlice({
  name: 'axe',
  initialState,
  reducer: {
    startAxeCounter: (state) => {
      state.isActive = true;
    },
  },
});

export const { startAxeCounter } = createSlice;
export default axeSlice.reducer;
