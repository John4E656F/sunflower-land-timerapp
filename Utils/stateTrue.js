//Import Tools Actions
import { startAxeCounter } from '../redux/tools/axeSlice';
import { startWoodPickaxeCounter } from '../redux/tools/woodPickaxeSlice';
import { startStonePickaxeCounter } from '../redux/tools/stonePickaxeSlice';
import { startIronPickaxeCounter } from '../redux/tools/ironPickaxeSlice';
//Import Crops Actions
import { startpotatoCounter } from '../redux/crops/potatoSlice';
import { startpumpkinCounter } from '../redux/crops/pumpkinSlice';
import { startcarrotCounter } from '../redux/crops/carrotSlice';
import { startcabbageCounter } from '../redux/crops/cabbageSlice';
import { startbeetrootCounter } from '../redux/crops/beetrootSlice';
import { startcauliflowerCounter } from '../redux/crops/cauliflowerSlice';
import { startparsnipCounter } from '../redux/crops/parsnipSlice';
import { startradishCounter } from '../redux/crops/radishSlice';
import { startwheatCounter } from '../redux/crops/wheatSlice';
import { startkaleCounter } from '../redux/crops/kaleSlice';
//Import Food Actions
import { startpumpkinSoupCounter } from '../redux/food/pumpkinSoupSlice';
import { startbumpkinBrothCounter } from '../redux/food/bumpkinBrothSlice';
import { startboiledEggCounter } from '../redux/food/boiledEggSlice';
import { startkaleStewCounter } from '../redux/food/kaleStewSlice';
import { startmushroomSoupCounter } from '../redux/food/mushroomSoupSlice';
import { startreindeerCarrotCounter } from '../redux/food/reindeerCarrotSlice';

export default function stateTrue({ dispatch, itemName }) {
  switch (itemName) {
    case 'Axe':
      dispatch(startAxeCounter(true));
      break;
    case 'Wood Pickaxe':
      dispatch(startWoodPickaxeCounter(true));
      break;
    case 'Stone Pickaxe':
      dispatch(startStonePickaxeCounter(true));
      break;
    case 'Iron Pickaxe':
      dispatch(startIronPickaxeCounter(true));
      break;
    case 'Potato':
      dispatch(startpotatoCounter(true));
      break;
    case 'Pumpkin':
      dispatch(startpumpkinCounter(true));
      break;
    case 'Carrot':
      dispatch(startcarrotCounter(true));
      break;
    case 'Cabbage':
      dispatch(startcabbageCounter(true));
      break;
    case 'Beetroot':
      dispatch(startbeetrootCounter(true));
      break;
    case 'Cauliflower':
      dispatch(startcauliflowerCounter(true));
      break;
    case 'Parsnip':
      dispatch(startparsnipCounter(true));
      break;
    case 'Radish':
      dispatch(startradishCounter(true));
      break;
    case 'Wheat':
      dispatch(startwheatCounter(true));
      break;
    case 'Kale':
      dispatch(startkaleCounter(true));
      break;
    case 'Pumpkin Soup':
      dispatch(startpumpkinSoupCounter(true));
      break;
    case 'Bumpkin Broth':
      dispatch(startbumpkinBrothCounter(true));
      break;
    case 'Boiled Egg':
      dispatch(startboiledEggCounter(true));
      break;
    case 'Kale Stew':
      dispatch(startkaleStewCounter(true));
      break;
    case 'Mushroom Soup':
      dispatch(startmushroomSoupCounter(true));
      break;
    case 'Reindeer Carrot':
      dispatch(startreindeerCarrotCounter(true));
      break;
  }
}
