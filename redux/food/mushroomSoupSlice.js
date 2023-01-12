import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Mushrrom Soup',
  isActive: false,
  value: 86400,
};

export const mushroomSoupSlice = createSlice({
  name: 'mushroomSoup',
  initialState,
  reducers: {
    startmushroomSoupCounter: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { startmushroomSoupCounter } = mushroomSoupSlice.actions;
export default mushroomSoupSlice.reducer;
