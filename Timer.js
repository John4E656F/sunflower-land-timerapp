import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startAxeCounter } from './redux/tools/axeSlice';
import { startWoodPickaxeCounter } from './redux/tools/woodPickaxeSlice';
import { startStonePickaxeCounter } from './redux/tools/stonePickaxeSlice';
import { startIronPickaxeCounter } from './redux/tools/ironPickaxeSlice';
import { startpotatoCounter } from './redux/crops/potatoSlice';
import { startpumpkinCounter } from './redux/crops/pumpkinSlice';
import { startcarrotCounter } from './redux/crops/carrotSlice';
import { startcabbageCounter } from './redux/crops/cabbageSlice';
import { startbeetrootCounter } from './redux/crops/beetrootSlice';
import { startcauliflowerCounter } from './redux/crops/cauliflowerSlice';
import { startparsnipCounter } from './redux/crops/parsnipSlice';
import { startradishCounter } from './redux/crops/radishSlice';
import { startwheatCounter } from './redux/crops/wheatSlice';
import { startkaleCounter } from './redux/crops/kaleSlice';

export default function Timer({ itemName }) {
  let initialStatus;
  switch (itemName) {
    case 'Axe':
      initialStatus = useSelector(({ toolDomain }) => toolDomain.axe);
      break;
    case 'Wood Pickaxe':
      initialStatus = useSelector(({ toolDomain }) => toolDomain.woodPickaxe);
      break;
    case 'Stone Pickaxe':
      initialStatus = useSelector(({ toolDomain }) => toolDomain.stonePickaxe);
      break;
    case 'Iron Pickaxe':
      initialStatus = useSelector(({ toolDomain }) => toolDomain.ironPickaxe);
      break;
    case 'Potato':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.potato);
      break;
    case 'Pumpkin':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.pumpkin);
      break;
    case 'Carrot':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.carrot);
      break;
    case 'Cabbage':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.cabbage);
      break;
    case 'Beetroot':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.beetroot);
      break;
    case 'Cauliflower':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.cauliflower);
      break;
    case 'Parsnip':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.parsnip);
      break;
    case 'Radish':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.radish);
      break;
    case 'Wheat':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.wheat);
      break;
    case 'Kale':
      initialStatus = useSelector(({ cropsDomain }) => cropsDomain.kale);
      break;
    case 'Pumpkin Soup':
      initialStatus = useSelector(({ foodDomain }) => foodDomain.pumpkinSoup);
      break;
    case 'Bumpkin Broth':
      initialStatus = useSelector(({ foodDomain }) => foodDomain.bumpkinBroth);
      break;
    case 'Boiled Egg':
      initialStatus = useSelector(({ foodDomain }) => foodDomain.boiledEgg);
      break;
    case 'Kale Stew':
      initialStatus = useSelector(({ foodDomain }) => foodDomain.kaleStew);
      break;
    case 'Mushroom Soup':
      initialStatus = useSelector(({ foodDomain }) => foodDomain.mushroomSoup);
      break;
    case 'Reindeer Carrot':
      initialStatus = useSelector(({ foodDomain }) => foodDomain.reindeerCarrot);
      break;
  }

  let initialValue = initialStatus.value;
  let isActive = initialStatus.isActive;
  const [value, setvalue] = useState(initialValue);

  let sDisplay = value % 60;
  const minutesRemaining = parseInt((value - sDisplay) / 60);
  let mDisplay = minutesRemaining % 60;
  const hoursRemaining = (minutesRemaining - mDisplay) / 60;
  let hDisplay = hoursRemaining % 60;
  const daysRemaining = (hoursRemaining - hDisplay) / 60;
  let dDisplay = daysRemaining % 60;

  useEffect(() => {
    let interval = null;
    if (isActive === true) {
      if (value > 0) {
        interval = setInterval(() => {
          setvalue(value - 1);
        }, 1000);
      } else if (!isActive && value === 0) {
        clearInterval(interval);
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
            disptach(startpotatoCounter(false));
            break;
          case 'Pumpkin':
            disptach(startpumpkinCounter(false));
            break;
          case 'Carrot':
            disptach(startcarrotCounter(false));
            break;
          case 'Cabbage':
            disptach(startcabbageCounter(false));
            break;
          case 'Beetroot':
            disptach(startbeetrootCounter(false));
            break;
          case 'Cauliflower':
            disptach(startcauliflowerCounter(false));
            break;
          case 'Parsnip':
            disptach(startparsnipCounter(false));
            break;
          case 'Radish':
            disptach(startradishCounter(false));
            break;
          case 'Wheat':
            disptach(startwheatCounter(false));
            break;
          case 'Kale':
            disptach(startkaleCounter(false));
            break;
          case 'Pumpkin Soup':
            dispatch(startpumpkinSoupCounter(false));
            break;
          case 'Bumpkin Broth':
            dispatch(startbumpkinBrothCounter(false));
            break;
          case 'Boiled Egg':
            dispatch(startboiledEggCounter(false));
            break;
          case 'Kale Stew':
            dispatch(startkaleStewCounter(false));
            break;
          case 'Mushroom Soup':
            dispatch(startmushroomSoupCounter(false));
            break;
          case 'Reindeer Carrot':
            dispatch(startreindeerCarrotCounter(false));
            break;
        }
      }
      return () => clearInterval(interval);
    }
  }, [isActive, value]);

  return (
    <Text>
      {dDisplay > 0 ? dDisplay + 'd ' : ''}
      {hDisplay > 0 ? hDisplay + 'h ' : ''}
      {mDisplay > 0 ? mDisplay + 'm ' : ''}
      {sDisplay > 0 ? sDisplay + 's ' : ''}
    </Text>
  );
}

const styles = StyleSheet.create({});
