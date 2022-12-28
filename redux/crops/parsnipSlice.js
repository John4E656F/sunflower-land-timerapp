import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 14400,
};

export const parsnipSlice = createSlice({
  name: 'parsnip',
  initialState,
  reducers: {
    startparsnipCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startparsnipCounter } = parsnipSlice.actions;
export default parsnipSlice.reducer;
