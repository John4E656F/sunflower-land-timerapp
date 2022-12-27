import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect, useRef } from 'react';

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

export default function App() {
  const [timer, setTimer] = useState({
    //Tools
    AxeCount: 1200000,
    WoodPickaxeCount: 240000,
    StonePickaxeCount: 480000,
    IronPickaxeCount: 1440000,

    //Crops
    PotatoCount: 5000,
    PumpkinCount: 30000,
    CarrotCount: 60000,
    CabbageCount: 120000,
    BeetrootCount: 240000,
    CauliflowerCount: 480000,
    ParsnipCount: 720000,
    RadishCount: 1440000,
    WheatCount: 1440000,
    KaleCount: 2160000,

    //Food
    PumpkinSoupCount: 3000,
    BumpkinBrothCount: 96000,
    BoiledEggCount: 60000,
    KaleStewCount: 120000,
    MushroomSoupCount: 10000,
    ReindeerCarrotCount: 5000,
  });
  const {
    AxeCount,
    WoodPickaxeCount,
    StonePickaxeCount,
    IronPickaxeCount,

    //Crops
    PotatoCount,
    PumpkinCount,
    CarrotCount,
    CabbageCount,
    BeetrootCount,
    CauliflowerCount,
    ParsnipCount,
    RadishCount,
    WheatCount,
    KaleCount,

    //Food
    PumpkinSoupCount,
    BumpkinBrothCount,
    BoiledEggCount,
    KaleStewCount,
    MushroomSoupCount,
    ReindeerCarrotCount,
  } = timer;

  const [axeTimer, setAxeTimer] = useState({ value: 7200000, state: false });
  const [woodpickaxeTimer, setWoodPickaxeTimer] = useState({ value: 14400000, state: false });
  const [stonepickaxeTimer, setStonePickaxeTimer] = useState({ value: 28800000, state: false });
  const [ironpickaxeTimer, setIronPickaxeTimer] = useState({ value: 86400000, state: false });

  const startTimer = (state) => {
    const item = state.formatedItemName;
    const setState = state.formatedSetItemName;
    setState({ ...item, state: true });
  };

  const formatTime = (duration) => {
    const d = duration;
    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hours = Math.floor((d / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((d / 1000 / 60) % 60);
    let seconds = Math.floor((d / 1000) % 60);

    let dDisplay = days > 0 ? days + 'd' : '';
    let hDisplay = hours > 0 ? hours + 'h' : '';
    let mDisplay = minutes > 0 ? minutes + 'm' : '';
    let sDisplay = seconds > 0 ? seconds + 's' : '';
    return dDisplay + hDisplay + mDisplay + sDisplay;
  };

  const Timer = ({ props }) => {
    const ref = useRef(props).current;
    const item = ref.formatedItemName;
    const setItem = ref.formatedSetItemName;
    const itemState = item.state;
    const itemValue = item.value;
    useEffect(() => {
      if (itemState === true) {
        const timer =
          itemValue > 0 &&
          setTimeout(
            setItem((prev) => ({ ...prev, value: itemValue - 5 })),
            1000,
          );
        if (itemValue === 0) {
          setItem((prev) => ({ ...prev, state: false }));
        }
        return () => clearInterval(timer);
      }
    }, [itemValue, itemState]);

    return <Text>{formatTime(itemValue)}</Text>;
  };

  const ItemList = ({ item }) => {
    const itemName = item.name;
    const formatedItemName = eval(itemName.replace(/\s+/g, '').toLowerCase() + 'Timer');
    const formatedSetItemName = eval('set' + itemName.replace(/\s+/g, '') + 'Timer');

    return (
      <View style={styles.itemContainer}>
        <Image style={styles.itemLogo} source={item.image} />

        <Timer props={{ itemName, formatedItemName, formatedSetItemName }} />
        <Button
          style={styles.timerBtn}
          onPress={() => {
            startTimer({ formatedItemName, formatedSetItemName });
          }}
        >
          Start
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style='auto' />
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
            <ItemList item={item} key={i} />
          ))}
        </View>
        {/* <FlatList
          initialNumToRender='1'
          contentContainerStyle={styles.list}
          numColumns={numColumns}
          data={DataTools}
          keyExtraction={(item, index) => item + index}
          renderItem={renderItem}
        /> */}
        {/* <Text style={styles.timerCategory}>Crops</Text>
        <FlatList
          contentContainerStyle={styles.list}
          numColumns={numColumns}
          data={DataCrops}
          keyExtraction={(item, index) => item + index}
          renderItem={renderItem}
        />
        <Text style={styles.timerCategory}>Foods</Text>
        <FlatList
          contentContainerStyle={styles.list}
          numColumns={numColumns}
          data={DataFood}
          keyExtraction={(item, index) => item + index}
          renderItem={renderItem}
        /> */}
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
