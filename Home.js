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
  // const [timer, setTimer] = useState({
  //   //Tools
  //   AxeCount: 1200000,
  //   WoodPickaxeCount: 240000,
  //   StonePickaxeCount: 480000,
  //   IronPickaxeCount: 1440000,

  //   //Crops
  //   PotatoCount: 5000,
  //   PumpkinCount: 30000,
  //   CarrotCount: 60000,
  //   CabbageCount: 120000,
  //   BeetrootCount: 240000,
  //   CauliflowerCount: 480000,
  //   ParsnipCount: 720000,
  //   RadishCount: 1440000,
  //   WheatCount: 1440000,
  //   KaleCount: 2160000,

  //   //Food
  //   PumpkinSoupCount: 3000,
  //   BumpkinBrothCount: 96000,
  //   BoiledEggCount: 60000,
  //   KaleStewCount: 120000,
  //   MushroomSoupCount: 10000,
  //   ReindeerCarrotCount: 5000,
  // });
  // const {
  //   AxeCount,
  //   WoodPickaxeCount,
  //   StonePickaxeCount,
  //   IronPickaxeCount,

  //   //Crops
  //   PotatoCount,
  //   PumpkinCount,
  //   CarrotCount,
  //   CabbageCount,
  //   BeetrootCount,
  //   CauliflowerCount,
  //   ParsnipCount,
  //   RadishCount,
  //   WheatCount,
  //   KaleCount,

  //   //Food
  //   PumpkinSoupCount,
  //   BumpkinBrothCount,
  //   BoiledEggCount,
  //   KaleStewCount,
  //   MushroomSoupCount,
  //   ReindeerCarrotCount,
  // } = timer;

  return (
    <View>
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
      </View>
    </View>
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
    width: '90%',
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
    flexDirection: 'row',
  },
});
