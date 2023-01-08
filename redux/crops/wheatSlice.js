import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Wheat',
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

export const wheatSlice = createSlice({
  name: 'wheat',
  initialState,
  reducers: {
    startwheatCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setWheatSeedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.seedSpecialist.isActive;
      state.value = state.seedSpecialist.isActive === false ? state.value : state.value - state.value * 0.05;
    },
    setWheatNancy: (state) => {
      state.nancy.isActive = state.scarecrow.isActive || state.kuebiko.isActive ? false : !state.apprenticeBeaver.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setWheatScarecrow: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive = state.kuebiko.isActive ? false : !state.scarecrow.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setWheatKuebiko: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive ? (state.scarecrow.isActive = false) : null;
      state.kuebiko.isActive = !state.kuebiko.isActive;
      state.value = state.kuebiko.isActive === false ? state.value : state.value - state.value * 0.15;
    },
  },
});

export const { startwheatCounter, setWheatSeedSpecialist, setWheatNancy, setWheatScarecrow, setWheatKuebiko } = wheatSlice.actions;
export default wheatSlice.reducer;
