import { AppState, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useRef, useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getStore from '../../utils/getStore';
import stateTrue from '../../utils/stateTrue';
import stateEnd from '../../utils/stateEnd';
import Timer from './Timer';
import schedulePushNotification from '../../utils/Notification';
import { storeStringData, getElapsedTime } from '../../utils/Storage';

export default function ItemList({ item, reset, setResetCount }) {
  // const appState = useRef(AppState.currentState);
  const itemName = item.name;
  const dispatch = useDispatch();
  const storeData = getStore({ itemName });
  const [value, setValue] = useState();

  useEffect(() => {
    let interval = null;
    if (storeData.isActive === true) {
      if (value > 0) {
        interval = setInterval(() => {
          setValue(value - 1);
        }, 1000);
      } else if (value === 0) {
        stateEnd({ dispatch, itemName });
      }
      return () => clearInterval(interval);
    } else if (reset) {
      // console.log('ok');
      const elapsed = getElapsedTime(itemName);
      // console.log(getElapsedTime);
      setResetCount(false);
    } else {
      setValue(storeData.value);
    }
  }, [storeData.isActive, value, storeData.value, reset]);

  const startTimer = () => {
    stateTrue({ dispatch, itemName });
    schedulePushNotification(storeData);
    storeStringData(itemName);
    // registerBackgroundFetchAsync(itemName);
  };

  return (
    <TouchableOpacity stle={styles.startBtn} onPress={() => startTimer()}>
      <View style={[styles.itemContainer, storeData.isActive ? styles.active : styles.notActive]}>
        <Image style={styles.itemLogo} source={item.image} />
        <View style={styles.textContainer}>
          <Timer itemName={itemName} value={value} data={storeData} isActive={storeData.isActive} key={itemName} dispatch={dispatch} />
        </View>
        {storeData.isActive ? null : <Text style={{ color: '#742C2C' }}>Press to Start</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: '#EFBA3D',
  },
  notActive: {
    backgroundColor: '#5AC142',
  },
  itemContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 125,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  itemLogo: {
    padding: 5,
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  textContainer: {
    marginBottom: 5,
  },
  startBtn: {
    backgroundColor: '#004AAD',
    borderRadius: 50,
  },
});
