import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Parsnip',
  isActive: false,
  value: 14400,
  mysteriousParsnip: {
    value: 0.5,
    isActive: false,
  },
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

export const parsnipSlice = createSlice({
  name: 'parsnip',
  initialState,
  reducers: {
    startparsnipCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setParsnipMysteriousParsnip: (state) => {
      state.mysteriousParsnip.isActive = !state.mysteriousParsnip.isActive;
      state.value = state.mysteriousParsnip.isActive === false ? state.value : state.value - state.value * 0.05;
    },
    setParsnipSeedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.seedSpecialist.isActive;
      state.value = state.seedSpecialist.isActive === false ? state.value : state.value - state.value * 0.05;
    },
    setParsnipNancy: (state) => {
      state.nancy.isActive = state.scarecrow.isActive || state.kuebiko.isActive ? false : !state.nancy.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setParsnipScarecrow: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive = state.kuebiko.isActive ? false : !state.scarecrow.isActive;
      state.value = state.nancy.isActive === false ? state.value : state.value - state.value * 0.15;
    },
    setParsnipKuebiko: (state) => {
      state.nancy.isActive ? (state.nancy.isActive = false) : null;
      state.scarecrow.isActive ? (state.scarecrow.isActive = false) : null;
      state.kuebiko.isActive = !state.kuebiko.isActive;
      state.value = state.kuebiko.isActive === false ? state.value : state.value - state.value * 0.15;
    },
  },
});

export const { startparsnipCounter, setParsnipMysteriousParsnip, setParsnipSeedSpecialist, setParsnipNancy, setParsnipScarecrow, setParsnipKuebiko } =
  parsnipSlice.actions;
export default parsnipSlice.reducer;
