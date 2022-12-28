import { combineReducers } from '@reduxjs/toolkit';
import pumpkinSoup from './pumpkinSoupSlice';
import bumpkinBroth from './bumpkinBrothSlice';
import boiledEgg from './boiledEggSlice';
import kaleStew from './kaleStewSlice';
import mushroomSoup from './mushroomSoupSlice';
import reindeerCarrot from './reindeerCarrotSlice';

const foodDomain = combineReducers({
  pumpkinSoup,
  bumpkinBroth,
  boiledEgg,
  kaleStew,
  mushroomSoup,
  reindeerCarrot,
});

export default foodDomain;
