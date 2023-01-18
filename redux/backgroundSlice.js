import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  duration: null,
};

export const backgroundDurationSlice = createSlice({
  name: 'backgroundDuration',
  initialState,
  reducers: {
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
});

export const { setDuration } = backgroundDurationSlice.actions;
export default backgroundDurationSlice.reducer;
