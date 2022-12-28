import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 7200,
};

export const cabbageSlice = createSlice({
  name: 'cabbage',
  initialState,
  reducers: {
    startcabbageCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startcabbageCounter } = cabbageSlice.actions;
export default cabbageSlice.reducer;
