import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Potato',
  isActive: false,
  value: 300,
  seedSpecialist: {
    value: 0.05,
    isActive: false,
  },
  nancy: {
    value: 0.15,
    isActive: false,
  },
};

export const potatoSlice = createSlice({
  name: 'potato',
  initialState,
  reducers: {
    startpotatoCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setseedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.treeHugger.isActive;
      state.value = state.seedSpecialist.isActive === false ? state.value : state.value - state.value * state.seedSpecialist.value;
    },
    setNancy: (state) => {
      state.nancy.isActive = !state.nancy.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.2;
    },
  },
});

export const { startpotatoCounter } = potatoSlice.actions;
export default potatoSlice.reducer;
