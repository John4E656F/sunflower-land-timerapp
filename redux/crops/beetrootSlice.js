import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Beetroot',
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

export const beetrootSlice = createSlice({
  name: 'beetroot',
  initialState,
  reducers: {
    startbeetrootCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setBeetrootSeedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.seedSpecialist.isActive;
      state.value = state.seedSpecialist.isActive === false ? state.value : state.value - state.value * 0.05;
    },
    setBeetrootNancy: (state) => {
      state.nancy.isActive = state.scarecrow.isActive || state.kuebiko.isActive ? false : !state.nancy.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setBeetrootScarecrow: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive = state.kuebiko.isActive ? false : !state.scarecrow.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setBeetrootKuebiko: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive ? (state.scarecrow.isActive = false) : null;
      state.kuebiko.isActive = !state.kuebiko.isActive;
      state.value = state.kuebiko.isActive === false ? state.value : state.value - state.value * 0.15;
    },
  },
});

export const { startbeetrootCounter, setBeetrootSeedSpecialist, setBeetrootNancy, setBeetrootScarecrow, setBeetrootKuebiko } = beetrootSlice.actions;
export default beetrootSlice.reducer;
