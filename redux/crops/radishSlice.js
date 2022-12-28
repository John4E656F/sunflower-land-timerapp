import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 14400,
};

export const radishSlice = createSlice({
  name: 'radish',
  initialState,
  reducers: {
    startradishCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startradishCounter } = radishSlice.actions;
export default radishSlice.reducer;
