import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 300,
};

export const potatoSlice = createSlice({
  name: 'potato',
  initialState,
  reducers: {
    startpotatoCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startpotatoCounter } = potatoSlice.actions;
export default potatoSlice.reducer;
