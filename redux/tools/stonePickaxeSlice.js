import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Stone Pickaxe',
  isActive: false,
  value: 28800,
};

export const stonePickaxeSlice = createSlice({
  name: 'stonePickaxe',
  initialState,
  reducers: {
    startStonePickaxeCountdown: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    startStonePickaxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startStonePickaxeCountdown, startStonePickaxeCounter } = stonePickaxeSlice.actions;
export default stonePickaxeSlice.reducer;
