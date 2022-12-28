import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { startAxeCounter } from '../redux/tools/axeSlice';
import { startWoodPickaxeCounter } from '../redux/tools/woodPickaxeSlice';
import { startStonePickaxeCounter } from '../redux/tools/stonePickaxeSlice';
import { startIronPickaxeCounter } from '../redux/tools/ironPickaxeSlice';

import Timer from '../Timer';

export default function ItemList({ item }) {
  const dispatch = useDispatch();
  // const x = useSelector(({ toolDomain }) => toolDomain.axe.isActive);
  let axe = useSelector(({ toolDomain }) => toolDomain.axe);
  let woodPickaxe = useSelector(({ toolDomain }) => toolDomain.woodPickaxe.isActive);
  let stonePickaxe = useSelector(({ toolDomain }) => toolDomain.stonePickaxe.isActive);
  let ironPickaxe = useSelector(({ toolDomain }) => toolDomain.ironPickaxe.isActive);
  // console.log(x);
  const itemName = item.name;
  // const formatedItemState = eval(itemName.replace(/\s+/g, '').toLowerCase() + 'Timer');
  // const formatedItemName = 'set' + itemName.replace(/\s+/g, '') + 'Timer';
  // const formatedSetItemName = eval('set' + itemName.replace(/\s+/g, '') + 'Timer');
  // console.log(itemName);

  function startTimer() {
    switch (itemName) {
      case 'Axe':
        dispatch(startAxeCounter(true));
        break;
      case 'Wood Pickaxe':
        dispatch(startWoodPickaxeCounter(true));
        break;
      case 'Stone Pickaxe':
        dispatch(startStonePickaxeCounter(true));
        break;
      case 'Iron Pickaxe':
        dispatch(startIronPickaxeCounter(true));
        break;
    }
  }

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemLogo} source={item.image} />
      <Timer itemName={itemName} key={itemName} />
      <Button title='Start' onPress={() => startTimer()} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'blue',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
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
