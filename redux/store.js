import { configureStore } from '@reduxjs/toolkit';
import toolDomain from './tools/index';
import cropsDomain from './crops/index';
import foodDomain from './food/index';
import notificationReducer from './notificationSlice';
import backgroundReducer from './backgroundSlice';

const store = configureStore({
  reducer: {
    background: backgroundReducer,
    notification: notificationReducer,
    toolDomain,
    cropsDomain,
    foodDomain,
  },
});

export default store;
