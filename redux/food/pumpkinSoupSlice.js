import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 86400,
};

export const pumpkinSoupSlice = createSlice({
  name: 'pumpkinSoup',
  initialState,
  reducers: {
    startpumpkinSoupCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startpumpkinSoupCounter } = pumpkinSoupSlice.actions;
export default pumpkinSoupSlice.reducer;
