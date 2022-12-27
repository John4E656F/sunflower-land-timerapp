import { combineReducers } from '@reduxjs/toolkit';
import axe from './axeSlice';
import woodPickaxe from './woodPickaxeSlice';
import stonePickaxe from './stonePickaxeSlice';
import ironPickaxe from './ironPickaxeSlice';

const toolDomain = combineReducers({
  axe,
  woodPickaxe,
  stonePickaxe,
  ironPickaxe,
});

export default toolDomain;
