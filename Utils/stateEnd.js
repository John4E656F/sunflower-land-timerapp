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

export default function stateEnd({ itemName }) {
  switch (itemName) {
    case 'Axe':
      dispatch(startAxeCounter(false));
      break;
    case 'Wood Pickaxe':
      dispatch(startWoodPickaxeCounter(false));
      break;
    case 'Stone Pickaxe':
      dispatch(startStonePickaxeCounter(false));
      break;
    case 'Iron Pickaxe':
      dispatch(startIronPickaxeCounter(false));
      break;
    case 'Potato':
      dispatch(startpotatoCounter(false));
      break;
    case 'Pumpkin':
      dispatch(startpumpkinCounter(false));
      break;
    case 'Carrot':
      dispatch(startcarrotCounter(false));
      break;
    case 'Cabbage':
      dispatch(startcabbageCounter(false));
      break;
    case 'Beetroot':
      dispatch(startbeetrootCounter(false));
      break;
    case 'Cauliflower':
      dispatch(startcauliflowerCounter(false));
      break;
    case 'Parsnip':
      dispatch(startparsnipCounter(false));
      break;
    case 'Radish':
      dispatch(startradishCounter(false));
      break;
    case 'Wheat':
      dispatch(startwheatCounter(false));
      break;
    case 'Kale':
      dispatch(startkaleCounter(false));
      break;
    case 'pumpkinSoup':
      dispatch(startpumpkinSoupCounter(false));
      break;
    case 'bumpkinBroth':
      dispatch(startbumpkinBrothCounter(false));
      break;
    case 'boiledEgg':
      dispatch(startboiledEggCounter(false));
      break;
    case 'kaleStew':
      dispatch(startkaleStewCounter(false));
      break;
    case 'mushroomSoup':
      dispatch(startmushroomSoupCounter(false));
      break;
    case 'reindeerCarrot':
      dispatch(startreindeerCarrotCounter(false));
      break;
  }
}
