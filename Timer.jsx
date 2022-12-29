import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function Timer({ itemName, isActive, endTimer }) {
  let initialValue;
  switch (itemName) {
    case 'Axe':
      initialValue = 7200;
      break;
    case 'Wood Pickaxe':
      initialValue = 14400;
      break;
    case 'Stone Pickaxe':
      initialValue = 28800;
      break;
    case 'Iron Pickaxe':
      initialValue = 86400;
      break;
    case 'Potato':
      initialValue = 300;
      break;
    case 'Pumpkin':
      initialValue = 1800;
      break;
    case 'Carrot':
      initialValue = 3600;
      break;
    case 'Cabbage':
      initialValue = 7200;
      break;
    case 'Beetroot':
      initialValue = 14400;
      break;
    case 'Cauliflower':
      initialValue = 28800;
      break;
    case 'Parsnip':
      initialValue = 43200;
      break;
    case 'Radish':
      initialValue = 86400;
      break;
    case 'Wheat':
      initialValue = 86400;
      break;
    case 'Kale':
      initialValue = 129600;
      break;
    case 'Pumpkin Soup':
      initialValue = 180;
      break;
    case 'Bumpkin Broth':
      initialValue = 1200;
      break;
    case 'Boiled Egg':
      initialValue = 3600;
      break;
    case 'Kale Stew':
      initialValue = 7200;
      break;
    case 'Mushroom Soup':
      initialValue = 600;
      break;
    case 'Reindeer Carrot':
      initialValue = 300;
      break;
  }

  const [value, setValue] = useState(initialValue);
  console.log(value);

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
          setValue(value - 1);
        }, 1000);
      } else if (!isActive && value === 0) {
        clearInterval(interval);
        endTimer();
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
