import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 7200000,
};

export const ironPickaxeSlice = createSlice({
  name: 'ironPickaxe',
  initialState,
  reducers: {
    startIronPickaxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startIronPickaxeCounter } = ironPickaxeSlice.actions;
export default ironPickaxeSlice.reducer;
