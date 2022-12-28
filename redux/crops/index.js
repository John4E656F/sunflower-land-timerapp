import { combineReducers } from '@reduxjs/toolkit';
import potato from './potatoSlice';
import pumpkin from './pumpkinSlice';
import carrot from './carrotSlice';
import cabbage from './cabbageSlice';
import beetroot from './beetrootSlice';
import cauliflower from './cauliflowerSlice';
import parsnip from './parsnipSlice';
import radish from './radishSlice';
import wheat from './wheatSlice';
import kale from './kaleSlice';

const cropsDomain = combineReducers({
  potato,
  pumpkin,
  carrot,
  cabbage,
  beetroot,
  cauliflower,
  parsnip,
  radish,
  wheat,
  kale,
});

export default cropsDomain;
