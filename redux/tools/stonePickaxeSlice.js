import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 28800000,
};

export const stonePickaxeSlice = createSlice({
  name: 'stonePickaxe',
  initialState,
  reducers: {
    startStonePickaxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startStonePickaxeCounter } = stonePickaxeSlice.actions;
export default stonePickaxeSlice.reducer;
