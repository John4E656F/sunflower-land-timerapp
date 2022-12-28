import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 86400,
};

export const boiledEggSlice = createSlice({
  name: 'boiledEgg',
  initialState,
  reducers: {
    startboiledEggCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startboiledEggCounter } = boiledEggSlice.actions;
export default boiledEggSlice.reducer;
