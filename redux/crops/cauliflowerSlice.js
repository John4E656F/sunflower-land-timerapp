import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Caulifloqer',
  isActive: false,
  value: 28800,
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

export const cauliflowerSlice = createSlice({
  name: 'cauliflower',
  initialState,
  reducers: {
    startcauliflowerCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setCauliflowerSeedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.seedSpecialist.isActive;
      state.value = state.seedSpecialist.isActive === false ? state.value : state.value - state.value * 0.05;
    },
    setCauliflowerNancy: (state) => {
      state.nancy.isActive = state.scarecrow.isActive || state.kuebiko.isActive ? false : !state.apprenticeBeaver.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setCauliflowerScarecrow: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive = state.kuebiko.isActive ? false : !state.scarecrow.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setCauliflowerKuebiko: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive ? (state.scarecrow.isActive = false) : null;
      state.kuebiko.isActive = !state.kuebiko.isActive;
      state.value = state.kuebiko.isActive === false ? state.value : state.value - state.value * 0.15;
    },
  },
});

export const { startcauliflowerCounter, setCauliflowerSeedSpecialist, setCauliflowerNancy, setCauliflowerScarecrow, setCauliflowerKuebiko } =
  cauliflowerSlice.actions;
export default cauliflowerSlice.reducer;
