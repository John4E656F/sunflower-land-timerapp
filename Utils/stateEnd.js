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

export default function stateEnd({ itemName, dispatch }) {
  switch (itemName) {
    case 'Axe':
      dispatch(startAxeCounter());
      break;
    case 'Wood Pickaxe':
      dispatch(startWoodPickaxeCounter());
      break;
    case 'Stone Pickaxe':
      dispatch(startStonePickaxeCounter());
      break;
    case 'Iron Pickaxe':
      dispatch(startIronPickaxeCounter());
      break;
    case 'Potato':
      dispatch(startpotatoCounter());
      break;
    case 'Pumpkin':
      dispatch(startpumpkinCounter());
      break;
    case 'Carrot':
      dispatch(startcarrotCounter());
      break;
    case 'Cabbage':
      dispatch(startcabbageCounter());
      break;
    case 'Beetroot':
      dispatch(startbeetrootCounter());
      break;
    case 'Cauliflower':
      dispatch(startcauliflowerCounter());
      break;
    case 'Parsnip':
      dispatch(startparsnipCounter());
      break;
    case 'Radish':
      dispatch(startradishCounter());
      break;
    case 'Wheat':
      dispatch(startwheatCounter());
      break;
    case 'Kale':
      dispatch(startkaleCounter());
      break;
    case 'Pumpkin Soup':
      dispatch(startpumpkinSoupCounter());
      break;
    case 'Bumpkin Broth':
      dispatch(startbumpkinBrothCounter());
      break;
    case 'Boiled Egg':
      dispatch(startboiledEggCounter());
      break;
    case 'Kale Stew':
      dispatch(startkaleStewCounter());
      break;
    case 'Mushroom Soup':
      dispatch(startmushroomSoupCounter());
      break;
    case 'Reindeer Carrot':
      dispatch(startreindeerCarrotCounter());
      break;
  }
}
