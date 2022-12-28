import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 1800,
};

export const pumpkinSlice = createSlice({
  name: 'pumpkin',
  initialState,
  reducers: {
    startpumpkinCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startpumpkinCounter } = pumpkinSlice.actions;
export default pumpkinSlice.reducer;
