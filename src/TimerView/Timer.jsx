import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import onDisplayNotification from '../../Utils/Notification';
import checkItem from '../../Utils/CheckItem';
import { getObjectData } from '../../Utils/Storage';

export default function Timer({ itemName, isActive, endTimer, boostState }) {
  const [value, setValue] = useState();
  const [notif, setNotif] = useState();

  useEffect(() => {
    checkItem({ itemName, boostState, setValue, setNotif });
  }, [boostState]);

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
        interval = setInterval(() => {
          setValue(value - 1);
        }, 1000);
      } else if (value === 0) {
        checkItem({ itemName, boostState, setValue, setNotif });
        onDisplayNotification(notif);
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
