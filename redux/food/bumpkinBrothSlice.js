import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 86400,
};

export const bumpkinBrothSlice = createSlice({
  name: 'bumpkinBroth',
  initialState,
  reducers: {
    startbumpkinBrothCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startbumpkinBrothCounter } = bumpkinBrothSlice.actions;
export default bumpkinBrothSlice.reducer;
