import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Iron Pickaxe',
  isActive: false,
  value: 86400,
};

export const ironPickaxeSlice = createSlice({
  name: 'ironPickaxe',
  initialState,
  reducers: {
    startIronPickaxeCountdown: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    startIronPickaxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startIronPickaxeCountdown, startIronPickaxeCounter } = ironPickaxeSlice.actions;
export default ironPickaxeSlice.reducer;
