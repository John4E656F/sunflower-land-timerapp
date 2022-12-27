import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 7200000,
};

export const axeSlice = createSlice({
  name: 'axe',
  initialState,
  reducers: {
    startAxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startAxeCounter } = axeSlice.actions;
export default axeSlice.reducer;
