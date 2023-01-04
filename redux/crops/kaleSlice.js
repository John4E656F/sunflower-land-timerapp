import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Kale',
  isActive: false,
  value: 14400,
};

export const kaleSlice = createSlice({
  name: 'kale',
  initialState,
  reducers: {
    startkaleCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startkaleCounter } = kaleSlice.actions;
export default kaleSlice.reducer;
