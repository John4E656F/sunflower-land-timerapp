import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Boiled Egg',
  isActive: false,
  value: 86400,
};

export const boiledEggSlice = createSlice({
  name: 'boiledEgg',
  initialState,
  reducers: {
    startboiledEggCounter: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { startboiledEggCounter } = boiledEggSlice.actions;
export default boiledEggSlice.reducer;
