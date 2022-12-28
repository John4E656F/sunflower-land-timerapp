import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 14400,
};

export const woodPickaxeSlice = createSlice({
  name: 'woodPickaxe',
  initialState,
  reducers: {
    startWoodPickaxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startWoodPickaxeCounter } = woodPickaxeSlice.actions;
export default woodPickaxeSlice.reducer;
