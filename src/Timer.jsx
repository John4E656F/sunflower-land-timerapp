import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
// import onCreateTriggerNotification from '../Utils/Notification';

export default function Timer({ itemName, isActive, endTimer }) {
  const [countdownState, setCountdownState] = useState(false);
  let initialValue;
  let initialNotif;
  switch (itemName) {
    case 'Axe':
      initialValue = 7200;
      initialNotif = {
        title: 'Wood Timers up',
        body: "Tree's have regrown",
      };
      break;
    case 'Wood Pickaxe':
      initialValue = 14400;
      initialNotif = {
        title: 'Stone Timers up',
        body: "Stone's have regrown",
      };
      break;
    case 'Stone Pickaxe':
      initialValue = 28800;
      initialNotif = {
        title: 'Iron Timers up',
        body: "Iron's have regrown",
      };
      break;
    case 'Iron Pickaxe':
      initialValue = 86400;
      initialNotif = {
        title: 'Gold Timers up',
        body: "Gold's have regrown",
      };
      break;
    case 'Potato':
      initialValue = 300;
      initialNotif = {
        title: 'Potato Timers up',
        body: 'Potato is ready to harvest',
      };
      break;
    case 'Pumpkin':
      initialValue = 1800;
      initialNotif = {
        title: 'Pumpkin Timers up',
        body: 'Pumpkin is ready to harvest',
      };
      break;
    case 'Carrot':
      initialValue = 3600;
      initialNotif = {
        title: 'Carrot Timers up',
        body: 'Carrot is ready to harvest',
      };
      break;
    case 'Cabbage':
      initialValue = 7200;
      initialNotif = {
        title: 'Cabbage Timers up',
        body: 'Cabbage is ready to harvest',
      };
      break;
    case 'Beetroot':
      initialValue = 14400;
      initialNotif = {
        title: 'Beetroot Timers up',
        body: 'Beetroot is ready to harvest',
      };
      break;
    case 'Cauliflower':
      initialValue = 28800;
      initialNotif = {
        title: 'Cauliflower Timers up',
        body: 'Cauliflower is ready to harvest',
      };
      break;
    case 'Parsnip':
      initialValue = 43200;
      initialNotif = {
        title: 'Parsnip Timers up',
        body: 'Parsnip is ready to harvest',
      };
      break;
    case 'Radish':
      initialValue = 86400;
      initialNotif = {
        title: 'Radish Timers up',
        body: 'Radish is ready to harvest',
      };
      break;
    case 'Wheat':
      initialValue = 86400;
      initialNotif = {
        title: 'Wheat Timers up',
        body: 'Wheat is ready to harvest',
      };
      break;
    case 'Kale':
      initialValue = 129600;
      initialNotif = {
        title: 'Kale Timers up',
        body: 'Kale is ready to harvest',
      };
      break;
    case 'Pumpkin Soup':
      initialValue = 180;
      initialNotif = {
        title: 'Pumpkin Soup Timers up',
        body: 'Pumpkin Soup is ready!',
      };
      break;
    case 'Bumpkin Broth':
      initialValue = 1200;
      initialNotif = {
        title: 'Bumpkin Broth Timers up',
        body: 'Bumpkin Broth is ready!',
      };
      break;
    case 'Boiled Egg':
      initialValue = 3600;
      initialNotif = {
        title: 'Boiled Egg Timers up',
        body: 'Boiled Egg is ready!',
      };
      break;
    case 'Kale Stew':
      initialValue = 7200;
      initialNotif = {
        title: 'Kale Stew Timers up',
        body: 'Kale Stew is ready!',
      };
      break;
    case 'Mushroom Soup':
      initialValue = 600;
      initialNotif = {
        title: 'Mushroom Soup Timers up',
        body: 'Mushroom Soup is ready!',
      };
      break;
    case 'Reindeer Carrot':
      initialValue = 300;
      initialNotif = {
        title: 'Reindeer Carrot Timers up',
        body: 'Reindeer Carrot is ready!',
      };
      break;
  }

  const [value, setValue] = useState(initialValue);
  const [notif, setNotif] = useState(initialNotif, countdownState);
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
        // onCreateTriggerNotification(notif, value);
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
