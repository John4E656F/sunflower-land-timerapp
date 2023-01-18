import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Pumpkin Soup',
  isActive: false,
  value: 10,
};

export const pumpkinSoupSlice = createSlice({
  name: 'pumpkinSoup',
  initialState,
  reducers: {
    startpumpkinSoupCounter: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { startpumpkinSoupCounter } = pumpkinSoupSlice.actions;
export default pumpkinSoupSlice.reducer;
