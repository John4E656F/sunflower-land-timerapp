import { StyleSheet, Text, View, Switch, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import checkBoost from '../../utils/checkBoost';
import getStoreByBoost from '../../utils/getStoreByBoost';
// import CheckBoostState from '../../Utils/CheckBoostState';

export default function ItemList({ item, dispatch, data }) {
  const itemName = item.name;
  const storeData = getStoreByBoost({ itemName });
  const [isActive, setIsActive] = useState(storeData);

  // console.log(itemName);
  useEffect(() => {
    setIsActive(storeData);
  }, [storeData]);
  const toggleSwitch = () => {
    checkBoost({ dispatch, itemName, data });
    setIsActive((previousState) => !previousState);
  };

  return (
    <TouchableOpacity stle={styles.startBtn} onPress={() => toggleSwitch()}>
      <View style={[styles.itemContainer, isActive ? styles.active : styles.notActive]}>
        <Image style={styles.itemLogo} source={item.image} />
        <View style={styles.textContainer}></View>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isActive}
        />
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
