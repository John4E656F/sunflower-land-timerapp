import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 14400,
};

export const wheatSlice = createSlice({
  name: 'wheat',
  initialState,
  reducers: {
    startwheatCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startwheatCounter } = wheatSlice.actions;
export default wheatSlice.reducer;
