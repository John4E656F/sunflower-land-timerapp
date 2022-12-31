import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import onDisplayNotification from '../../Utils/Notification';
import checkItem from '../../Utils/CheckItem';
import { getObjectData } from '../../Utils/Storage';

export default function Timer({ itemName, isActive, endTimer }) {
  const [countdownState, setCountdownState] = useState(false);
  const state = checkItem(itemName);

  let initialValue = state.initialValue;
  let initialNotif = state.initialNotif;

  const [value, setValue] = useState(initialValue);
  const [notif, setNotif] = useState(initialNotif, countdownState);

  let sDisplay = value % 60;
  const minutesRemaining = parseInt((value - sDisplay) / 60);
  let mDisplay = minutesRemaining % 60;
  const hoursRemaining = (minutesRemaining - mDisplay) / 60;
  let hDisplay = hoursRemaining % 60;
  const daysRemaining = (hoursRemaining - hDisplay) / 60;
  let dDisplay = daysRemaining % 60;

  useEffect(() => {
    const data = getObjectData(`@boost`);
    console.log(data);
    let interval = null;
    if (isActive === true) {
      if (value > 0) {
        interval = setInterval(() => {
          setValue(value - 1);
        }, 1000);
      } else if (value === 0) {
        onDisplayNotification(notif, initialValue);
        let resetState = checkItem(itemName);
        let value = resetState.initialValue;
        setValue(value);
        clearInterval(interval);
        endTimer();
      }
      return () => clearInterval(interval);
    }
  }, [isActive, value]);

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
