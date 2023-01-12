import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Bumpkin Broth',
  isActive: false,
  value: 86400,
};

export const bumpkinBrothSlice = createSlice({
  name: 'bumpkinBroth',
  initialState,
  reducers: {
    startbumpkinBrothCounter: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { startbumpkinBrothCounter } = bumpkinBrothSlice.actions;
export default bumpkinBrothSlice.reducer;
