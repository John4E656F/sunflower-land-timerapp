import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 7200,
};

export const axeSlice = createSlice({
  name: 'axe',
  initialState,
  reducers: {
    startAxeCountdown: (state) => {
      state.value -= 1;
    },
    startAxeCounter: (state, action) => {
      state.isActive = action.payload;
      console.log(state.value);
    },
  },
});

export const { startAxeCounter } = axeSlice.actions;
export default axeSlice.reducer;
