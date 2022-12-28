import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 28800,
};

export const cauliflowerSlice = createSlice({
  name: 'cauliflower',
  initialState,
  reducers: {
    startcauliflowerCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startcauliflowerCounter } = cauliflowerSlice.actions;
export default cauliflowerSlice.reducer;
