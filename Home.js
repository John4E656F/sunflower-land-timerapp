import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import ItemList from './ItemList';
//Assets
const Logo = require('./assets/icon_large.png');
const Tools = {
  axe: require('./assets/tools/axe.png'),
  woodPickaxe: require('./assets/tools/wood_pickaxe.png'),
  stonePickaxe: require('./assets/tools/stone_pickaxe.png'),
  ironPickaxe: require('./assets/tools/iron_pickaxe.png'),
};

const Crops = {
  potato: require('./assets/crops/potato.png'),
  pumpkin: require('./assets/crops/pumpkin.png'),
  carrot: require('./assets/crops/carrot.png'),
  cabbage: require('./assets/crops/cabbage.png'),
  beetroot: require('./assets/crops/beetroot.png'),
  cauliflower: require('./assets/crops/cauliflower.png'),
  parsnip: require('./assets/crops/parsnip.png'),
  radish: require('./assets/crops/radish.png'),
  wheat: require('./assets/crops/wheat.png'),
  kale: require('./assets/crops/kale.png'),
};

const Food = {
  pumpkinSoup: require('./assets/food/pumpkin_soup.png'),
  bumpkinBroth: require('./assets/food/bumpkin_broth.png'),
  boiledEgg: require('./assets/food/boiled_eggs.png'),
  kaleStew: require('./assets/food/kale_stew.png'),
  mushroomSoup: require('./assets/food/mushroom_soup.png'),
  reindeerCarrot: require('./assets/food/reindeer_carrot.png'),
};

const DataTools = [
  { name: 'Axe', image: Tools.axe },
  { name: 'Wood Pickaxe', image: Tools.woodPickaxe },
  { name: 'Stone Pickaxe', image: Tools.stonePickaxe },
  { name: 'Iron Pickaxe', image: Tools.ironPickaxe },
];
const DataCrops = [
  { name: 'Potato', image: Crops.potato },
  { name: 'Pumpkin', image: Crops.pumpkin },
  { name: 'Carrot', image: Crops.carrot },
  { name: 'Cabbage', image: Crops.cabbage },
  { name: 'Beetroot', image: Crops.beetroot },
  { name: 'Cauliflower', image: Crops.cauliflower },
  { name: 'Parsnip', image: Crops.parsnip },
  { name: 'Radish', image: Crops.radish },
  { name: 'Wheat', image: Crops.wheat },
  { name: 'Kale', image: Crops.kale },
];
const DataFood = [
  { name: 'Pumpkin Soup', image: Food.pumpkinSoup },
  { name: 'Bumpkin Broth', image: Food.bumpkinBroth },
  { name: 'Boiled Egg', image: Food.boiledEgg },
  { name: 'Kale Stew', image: Food.kaleStew },
  { name: 'Mushroom Soup', image: Food.mushroomSoup },
  { name: 'Reindeer Carrot', image: Food.reindeerCarrot },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.appTitle}>Sunflower Land Timer</Text>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Timer</Text>
        <Text style={styles.timerCategory}>Tools</Text>
        <View style={styles.listContainer}>
          {DataTools.map((item, i) => (
            <ItemList item={item} key={i.toString()} />
          ))}
        </View>
        <Text style={styles.timerCategory}>Crops</Text>
        <View style={styles.listContainer}>
          {DataCrops.map((item, i) => (
            <ItemList item={item} key={i.toString()} />
          ))}
        </View>
        <Text style={styles.timerCategory}>Foods</Text>
        <View style={styles.listContainer}>
          {DataFood.map((item, i) => (
            <ItemList item={item} key={i.toString()} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#74B1F9',
    alignItems: 'center',
    paddingTop: '15%',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'red',
    minWidth: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 18,
  },
  timerCategory: {
    fontWeight: '500',
    fontSize: 15,
    marginTop: 20,
  },
  listContainer: {
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
  },
});
