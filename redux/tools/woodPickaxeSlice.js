import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Wood Pickaxe',
  isActive: false,
  value: 14400,
  coalFace: {
    isActive: false,
    value: 0.2,
  },
};

export const woodPickaxeSlice = createSlice({
  name: 'woodPickaxe',
  initialState,
  reducers: {
    startWoodPickaxeCountdown: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    startWoodPickaxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setCoalFace: (state) => {
      state.coalFace.isActive = !state.coalFace.isActive;
      state.value = state.coalFace.isActive === false ? state.value : state.value - state.value * 0.2;
    },
  },
});

export const { startWoodPickaxeCountdown, startWoodPickaxeCounter, setCoalFace } = woodPickaxeSlice.actions;
export default woodPickaxeSlice.reducer;
