import { AppState, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useRef, useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getStore from '../../utils/getStore';
import stateTrue from '../../utils/stateTrue';
import stateEnd from '../../utils/stateEnd';
import Timer from './Timer';
import schedulePushNotification from '../../utils/Notification';

export default function ItemList({ item, setResetCount }) {
  const duration = useSelector((state) => state.background.duration);
  const itemName = item.name;
  const dispatch = useDispatch();
  const storeData = getStore({ itemName });
  const [value, setValue] = useState();

  useEffect(() => {
    let interval = null;
    if (storeData.isActive === true) {
      if ((duration !== null && value !== null) || undefined) {
        if (value > duration) {
          let newValue = value - duration;
          if (value > 0) {
            interval = setTimeout(() => {
              setValue(newValue - 1);
            }, 1000);
          } else if (value === 0) {
            stateEnd({ dispatch, itemName });
          }
        } else if (value <= duration) {
          stateEnd({ dispatch, itemName });
        }
      } else {
        if (value > 0) {
          interval = setTimeout(() => {
            setValue(value - 1);
          }, 1000);
        } else if (value === 0) {
          stateEnd({ dispatch, itemName });
        }
        return () => clearTimeout(interval);
      }
    } else {
      setValue(storeData.value);
    }
  }, [storeData.isActive, value, storeData.value]);

  const startTimer = () => {
    stateTrue({ dispatch, itemName });
    schedulePushNotification(storeData);
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
