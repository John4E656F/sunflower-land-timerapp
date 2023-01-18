//Import Tools Actions
import { setTreeHugger, setApprenticeBeaver, setConstructionBeaver } from '../redux/tools/axeSlice';
import { setCoalFace } from '../redux/tools/woodPickaxeSlice';

//Import Crops Actions
import { setPotatoSeedSpecialist, setPotatoNancy, setPotatoScarecrow, setPotatoKuebiko } from '../redux/crops/potatoSlice';
import { setPumpkinSeedSpecialist, setPumpkinNancy, setPumpkinScarecrow, setPumpkinKuebiko } from '../redux/crops/pumpkinSlice';
import { setCarrotSeedSpecialist, setCarrotNancy, setCarrotScarecrow, setCarrotKuebiko } from '../redux/crops/carrotSlice';
import { setCabbageSeedSpecialist, setCabbageNancy, setCabbageScarecrow, setCabbageKuebiko } from '../redux/crops/cabbageSlice';
import { setBeetrootSeedSpecialist, setBeetrootNancy, setBeetrootScarecrow, setBeetrootKuebiko } from '../redux/crops/beetrootSlice';
import { setCauliflowerSeedSpecialist, setCauliflowerNancy, setCauliflowerScarecrow, setCauliflowerKuebiko } from '../redux/crops/cauliflowerSlice';
import {
  setParsnipMysteriousParsnip,
  setParsnipSeedSpecialist,
  setParsnipNancy,
  setParsnipScarecrow,
  setParsnipKuebiko,
} from '../redux/crops/parsnipSlice';
import { setRadishSeedSpecialist, setRadishNancy, setRadishScarecrow, setRadishKuebiko } from '../redux/crops/radishSlice';
import { setWheatSeedSpecialist, setWheatNancy, setWheatScarecrow, setWheatKuebiko } from '../redux/crops/wheatSlice';
import { setKaleSeedSpecialist, setKaleNancy, setKaleScarecrow, setKaleKuebiko } from '../redux/crops/kaleSlice';
//Import Food Actions
import { startpumpkinSoupCounter } from '../redux/food/pumpkinSoupSlice';
import { startbumpkinBrothCounter } from '../redux/food/bumpkinBrothSlice';
import { startboiledEggCounter } from '../redux/food/boiledEggSlice';
import { startkaleStewCounter } from '../redux/food/kaleStewSlice';
import { startmushroomSoupCounter } from '../redux/food/mushroomSoupSlice';
import { startreindeerCarrotCounter } from '../redux/food/reindeerCarrotSlice';

export default function checkBoost({ dispatch, itemName }) {
  switch (itemName) {
    case 'treeHugger':
      dispatch(setTreeHugger());
      break;
    case 'apprenticeBeaver':
      dispatch(setApprenticeBeaver());
      break;
    case 'constructionBeaver':
      dispatch(setConstructionBeaver());
      break;
    case 'seedSpecialist':
      dispatch(setPotatoSeedSpecialist());
      dispatch(setPumpkinSeedSpecialist());
      dispatch(setCarrotSeedSpecialist());
      dispatch(setCabbageSeedSpecialist());
      dispatch(setBeetrootSeedSpecialist());
      dispatch(setCauliflowerSeedSpecialist());
      dispatch(setParsnipSeedSpecialist());
      dispatch(setRadishSeedSpecialist());
      dispatch(setWheatSeedSpecialist());
      dispatch(setKaleSeedSpecialist());
      break;
    case 'nancy':
      dispatch(setPotatoNancy());
      dispatch(setPumpkinNancy());
      dispatch(setCarrotNancy());
      dispatch(setCabbageNancy());
      dispatch(setBeetrootNancy());
      dispatch(setCauliflowerNancy());
      dispatch(setParsnipNancy());
      dispatch(setRadishNancy());
      dispatch(setWheatNancy());
      dispatch(setKaleNancy());
      break;
    case 'scarecrow':
      dispatch(setPotatoScarecrow());
      dispatch(setPumpkinScarecrow());
      dispatch(setCarrotScarecrow());
      dispatch(setCabbageScarecrow());
      dispatch(setBeetrootScarecrow());
      dispatch(setCauliflowerScarecrow());
      dispatch(setParsnipScarecrow());
      dispatch(setRadishScarecrow());
      dispatch(setWheatScarecrow());
      dispatch(setKaleScarecrow());
      break;
    case 'kuebiko':
      dispatch(setPotatoKuebiko());
      dispatch(setPumpkinKuebiko());
      dispatch(setCarrotKuebiko());
      dispatch(setCabbageKuebiko());
      dispatch(setBeetrootKuebiko());
      dispatch(setCauliflowerKuebiko());
      dispatch(setParsnipKuebiko());
      dispatch(setRadishKuebiko());
      dispatch(setWheatKuebiko());
      dispatch(setKaleKuebiko());
      break;
    case 'mysteriousParsnip':
      dispatch(setParsnipMysteriousParsnip());
      break;
    // case 'rushHour':
    //   dispatch(setRushHour());
  }
}
