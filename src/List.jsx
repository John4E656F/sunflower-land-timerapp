import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import Timer from './Timer';

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
    <View style={[styles.itemContainer, isActive ? styles.active : styles.notActive]}>
      <Image style={styles.itemLogo} source={item.image} />
      <Timer itemName={itemName} isActive={isActive} endTimer={() => endTimer()} key={itemName} />
      {isActive ? null : <Button title='Start' onPress={() => startTimer()} />}
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: 'yellow',
  },
  notActive: {
    backgroundColor: 'blue',
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
