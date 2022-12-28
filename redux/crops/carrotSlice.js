import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 3600,
};

export const carrotSlice = createSlice({
  name: 'carrot',
  initialState,
  reducers: {
    startcarrotCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startcarrotCounter } = carrotSlice.actions;
export default carrotSlice.reducer;
