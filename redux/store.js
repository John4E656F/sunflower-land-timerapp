import { configureStore } from '@reduxjs/toolkit';
import toolDomain from './tools/index';
import cropsDomain from './crops/index';
import foodDomain from './food/index';

const store = configureStore({
  reducer: {
    toolDomain,
    cropsDomain,
    foodDomain,
  },
});

export default store;
