import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 86400,
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
