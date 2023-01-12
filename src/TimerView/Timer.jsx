import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import schedulePushNotification from '../../utils/Notification';
import stateEnd from '../../utils/stateEnd';
import checkBoost from '../../utils/checkBoost';
import { startBackgroundTask } from '../../utils/background';
import registerBackgroundFetchAsync from '../../utils/background';
import unregisterBackgroundFetchAsync from '../../utils/background';

export default function Timer({ itemName, data, isActive, dispatch }) {
  const [value, setValue] = useState();
  const [loaded, setLoaded] = useState(false);

  let sDisplay = parseInt(value % 60);
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
        startBackgroundTask(interval, itemName, value, setValue);
        // interval = setInterval(() => {
        //   setValue(value - 1);
        // }, 1000);
      } else if (value === 0) {
        schedulePushNotification(itemName, data);
        stateEnd({ dispatch, itemName });
      }
      return () => clearInterval(interval);
    } else {
      setValue(data.value);
    }
  }, [isActive, value, data.value]);

  return (
    <Text style={[styles.timerText, isActive ? styles.timerActive : styles.timerInActive]}>
      {dDisplay > 0 ? dDisplay + 'd ' : ''}
      {hDisplay > 0 ? hDisplay + 'h ' : ''}
      {mDisplay > 0 ? mDisplay + 'm ' : ''}
      {sDisplay > 0 ? sDisplay + 's ' : ''}
    </Text>
  );
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timerActive: {
    color: 'black',
  },
  timerInActive: {
    color: 'white',
  },
});
