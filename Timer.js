import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startAxeCounter } from './redux/tools/axeSlice';
import { startWoodPickaxeCounter } from './redux/tools/woodPickaxeSlice';
import { startStonePickaxeCounter } from './redux/tools/stonePickaxeSlice';
import { startIronPickaxeCounter } from './redux/tools/ironPickaxeSlice';

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
