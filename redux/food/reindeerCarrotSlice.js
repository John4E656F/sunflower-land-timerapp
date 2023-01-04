import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Reindeer Carrot',
  isActive: false,
  value: 86400,
};

export const reindeerCarrotSlice = createSlice({
  name: 'reindeerCarrot',
  initialState,
  reducers: {
    startreindeerCarrotCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startreindeerCarrotCounter } = reindeerCarrotSlice.actions;
export default reindeerCarrotSlice.reducer;
