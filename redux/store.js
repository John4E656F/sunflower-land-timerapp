import { configureStore } from '@reduxjs/toolkit';
import toolDomain from './tools/index';

const store = configureStore({
  reducer: {
    toolDomain,
  },
});

export default store;
