import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { startAxeCounter } from './redux/axeSlice';
import Timer from './Timer';

export default function ItemList({ item }) {
  const dispatch = useDispatch();
  const [axeTimer, setAxeTimer] = useState({ value: 7200000, state: false });
  const [woodpickaxeTimer, setWoodPickaxeTimer] = useState({ value: 14400000, state: false });
  const [stonepickaxeTimer, setStonePickaxeTimer] = useState({ value: 28800000, state: false });
  const [ironpickaxeTimer, setIronPickaxeTimer] = useState({ value: 86400000, state: false });

  const itemName = item.name;
  const formatedItemState = eval(itemName.replace(/\s+/g, '').toLowerCase() + 'Timer');
  const formatedItemName = 'set' + itemName.replace(/\s+/g, '') + 'Timer';
  const formatedSetItemName = eval('set' + itemName.replace(/\s+/g, '') + 'Timer');
  //   console.log(formatedSetItemName);
  //   console.log(formatedItemName);
  //   console.log(actions);

  function startTimer() {
    console.log(itemName);
    switch (itemName) {
      case 'Axe':
        () => dispatch(startAxeCounter());
        break;
    }
  }
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemLogo} source={item.image} />

      <Timer props={{ formatedItemState, formatedSetItemName }} key={itemName} />
      <Button style={styles.timerBtn} onPress={() => startTimer()}>
        Start
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'blue',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  itemLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
