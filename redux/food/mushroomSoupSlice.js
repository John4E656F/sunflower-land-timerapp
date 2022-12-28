import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  value: 86400,
};

export const mushroomSoupSlice = createSlice({
  name: 'mushroomSoup',
  initialState,
  reducers: {
    startmushroomSoupCounter: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { startmushroomSoupCounter } = mushroomSoupSlice.actions;
export default mushroomSoupSlice.reducer;
