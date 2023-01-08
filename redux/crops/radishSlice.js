import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Radish',
  isActive: false,
  value: 14400,
  seedSpecialist: {
    value: 0.05,
    isActive: false,
  },
  nancy: {
    value: 0.15,
    isActive: false,
  },
  scarecrow: {
    value: 0.15,
    isActive: false,
  },
  kuebiko: {
    value: 0.15,
    isActive: false,
  },
};

export const radishSlice = createSlice({
  name: 'radish',
  initialState,
  reducers: {
    startradishCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setRadishSeedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.seedSpecialist.isActive;
      state.value = state.seedSpecialist.isActive === false ? state.value : state.value - state.value * 0.05;
    },
    setRadishNancy: (state) => {
      state.nancy.isActive = state.scarecrow.isActive || state.kuebiko.isActive ? false : !state.apprenticeBeaver.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setRadishScarecrow: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive = state.kuebiko.isActive ? false : !state.scarecrow.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setRadishKuebiko: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive ? (state.scarecrow.isActive = false) : null;
      state.kuebiko.isActive = !state.kuebiko.isActive;
      state.value = state.kuebiko.isActive === false ? state.value : state.value - state.value * 0.15;
    },
  },
});

export const { startradishCounter, setRadishSeedSpecialist, setRadishNancy, setRadishScarecrow, setRadishKuebiko } = radishSlice.actions;
export default radishSlice.reducer;
