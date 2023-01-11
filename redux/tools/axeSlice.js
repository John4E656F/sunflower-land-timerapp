import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Axe',
  isActive: false,
  initialValue: 7200,
  value: 7200,
  treeHugger: {
    value: 0.2,
    isActive: false,
    disabled: false,
  },
  apprenticeBeaver: {
    value: 0.5,
    isActive: false,
    disabled: false,
  },
  constructionBeaver: {
    value: 0.5,
    isActive: false,
  },
};

export const axeSlice = createSlice({
  name: 'axe',
  initialState,
  reducers: {
    startAxeCountdown: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    startAxeCounter: (state, action) => {
      state.isActive = action.payload;
    },
    setTreeHugger: (state) => {
      state.treeHugger.isActive = !state.treeHugger.isActive;
      state.value = state.treeHugger.isActive === false ? (state.value / (1 - 0.2)) * 1 : state.value - state.value * 0.2;
    },
    setApprenticeBeaver: (state) => {
      state.apprenticeBeaver.isActive = state.constructionBeaver.isActive === true ? false : !state.apprenticeBeaver.isActive;
      state.constructionBeaver.isActive === true
        ? (state.value = state.value)
        : (state.value = state.apprenticeBeaver.isActive === false ? (state.value / (1 - 0.5)) * 1 : state.value - state.value * 0.5);
    },
    setConstructionBeaver: (state) => {
      state.constructionBeaver.isActive = !state.constructionBeaver.isActive;
      state.apprenticeBeaver.isActive === true ? (state.value = (state.value / (1 - 0.5)) * 1) : null;
      state.constructionBeaver.isActive === true ? (state.apprenticeBeaver.isActive = false) : null;
      state.value = state.constructionBeaver.isActive === false ? (state.value / (1 - 0.5)) * 1 : state.value - state.value * 0.5;
    },
  },
});

export const { startAxeCountdown, startAxeCounter, setTreeHugger, setApprenticeBeaver, setConstructionBeaver } = axeSlice.actions;
export default axeSlice.reducer;
