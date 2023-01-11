import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Carrot',
  isActive: false,
  value: 3600,
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

export const carrotSlice = createSlice({
  name: 'carrot',
  initialState,
  reducers: {
    startcarrotCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setCarrotSeedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.seedSpecialist.isActive;
      state.value = state.seedSpecialist.isActive === false ? (state.value / (1 - 0.05)) * 1 : state.value - state.value * 0.05;
    },
    setCarrotNancy: (state) => {
      state.nancy.isActive = state.scarecrow.isActive === true || state.kuebiko.isActive === true ? false : !state.nancy.isActive;
      state.scarecrow.isActive === true || state.kuebiko.isActive === true
        ? (state.value = state.value)
        : (state.value = state.nancy.isActive === false ? (state.value / (1 - 0.15)) * 1 : state.value - state.value * 0.15);
    },
    setCarrotScarecrow: (state) => {
      state.nancy.isActive === true ? ((state.nancy.isActive = false), (state.value = (state.value / (1 - 0.15)) * 1)) : null;
      state.scarecrow.isActive = state.kuebiko.isActive === true ? false : !state.scarecrow.isActive;
      state.kuebiko.isActive === true || state.nancy.isActive === true
        ? (state.value = state.value)
        : (state.value = state.scarecrow.isActive === false ? (state.value / (1 - 0.15)) * 1 : state.value - state.value * 0.15);
    },
    setCarrotKuebiko: (state) => {
      state.nancy.isActive === true || state.scarecrow.isActive === true
        ? ((state.nancy.isActive = false), (state.value = (state.value / (1 - 0.15)) * 1))
        : null;
      state.scarecrow.isActive === true ? (state.scarecrow.isActive = false) : null;
      state.kuebiko.isActive = !state.kuebiko.isActive;
      state.value = state.kuebiko.isActive === false ? (state.value / (1 - 0.15)) * 1 : state.value - state.value * 0.15;
    },
  },
});

export const { startcarrotCounter, setCarrotSeedSpecialist, setCarrotNancy, setCarrotScarecrow, setCarrotKuebiko } = carrotSlice.actions;
export default carrotSlice.reducer;
