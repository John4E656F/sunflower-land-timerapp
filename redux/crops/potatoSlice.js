import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Potato',
  isActive: false,
  initialValue: 300,
  value: 300,
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

export const potatoSlice = createSlice({
  name: 'potato',
  initialState,
  reducers: {
    resetPotatoCounter: (state) => {
      state.value = state.initialValue;
    },
    startpotatoCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setPotatoSeedSpecialist: (state) => {
      state.seedSpecialist.isActive = !state.seedSpecialist.isActive;
      state.initialValue =
        state.seedSpecialist.isActive === false ? (state.initialValue / (1 - 0.05)) * 1 : state.initialValue - state.initialValue * 0.05;
    },
    setPotatoNancy: (state) => {
      state.nancy.isActive = state.scarecrow.isActive === true || state.kuebiko.isActive === true ? false : !state.nancy.isActive;
      state.scarecrow.isActive === true || state.kuebiko.isActive === true
        ? (state.initialValue = state.initialValue)
        : (state.initialValue =
            state.nancy.isActive === false ? (state.initialValue / (1 - 0.15)) * 1 : state.initialValue - state.initialValue * 0.15);
    },
    setPotatoScarecrow: (state) => {
      state.nancy.isActive === true ? ((state.nancy.isActive = false), (state.initialValue = (state.initialValue / (1 - 0.15)) * 1)) : null;
      state.scarecrow.isActive = state.kuebiko.isActive === true ? false : !state.scarecrow.isActive;
      state.kuebiko.isActive === true
        ? (state.initialValue = state.initialValue)
        : (state.initialValue =
            state.scarecrow.isActive === false ? (state.initialValue / (1 - 0.15)) * 1 : state.initialValue - state.initialValue * 0.15);
    },
    setPotatoKuebiko: (state) => {
      state.nancy.isActive === true || state.scarecrow.isActive === true
        ? ((state.nancy.isActive = false), (state.initialValue = (state.initialValue / (1 - 0.15)) * 1))
        : null;
      state.scarecrow.isActive === true ? (state.scarecrow.isActive = false) : null;
      state.kuebiko.isActive = !state.kuebiko.isActive;
      state.initialValue = state.kuebiko.isActive === false ? (state.initialValue / (1 - 0.15)) * 1 : state.initialValue - state.initialValue * 0.15;
    },
  },
});

export const { resetPotatoCounter, startpotatoCounter, setPotatoSeedSpecialist, setPotatoNancy, setPotatoScarecrow, setPotatoKuebiko } =
  potatoSlice.actions;
export default potatoSlice.reducer;
