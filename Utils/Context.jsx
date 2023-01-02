import { createContext } from 'react';
import { Logo, DataTools, DataCrops, DataFood } from './Assets';
import { DataBoost } from './Boost';

export const DataToolsContext = createContext(DataTools);

export const DataCropsContext = createContext(DataCrops);

export const DataFoodContext = createContext(DataFood);

export const DataBoostContext = createContext(DataBoost);
