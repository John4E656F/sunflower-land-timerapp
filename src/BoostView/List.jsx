import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function ItemList({ item }) {
  const [isActive, setIsActive] = useState(false);
  const itemName = item.name;

  const startTimer = () => {
    setIsActive(true);
  };
  const endTimer = () => {
    setIsActive(false);
  };

  return (
    <TouchableOpacity stle={styles.startBtn} onPress={() => startTimer()}>
      <View style={[styles.itemContainer, isActive ? styles.active : styles.notActive]}>
        <Image style={styles.itemLogo} source={item.image} />
        <View style={styles.textContainer}></View>
        {isActive ? null : <Text style={{ color: '#742C2C' }}>Press to Start</Text>}
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
