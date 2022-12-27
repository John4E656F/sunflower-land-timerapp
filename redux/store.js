import { configureStore } from '@reduxjs/toolkit';
import axeReducer from './axeSlice';
export const store = configureStore({
  reducer: {
    axe: axeReducer,
  },
});
