import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SectionList, ScrollView, Dimensions } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

//Assets
const Logo = require('./assets/icon_large.png');
const Tools = {
  axe: require('./assets/tools/axe.png'),
  woodPickaxe: require('./assets/tools/wood_pickaxe.png'),
  stonePickaxe: require('./assets/tools/stone_pickaxe.png'),
  ironPickaxe: require('./assets/tools/iron_pickaxe.png')
}

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
}

const Food = {
  mashedPotato: require('./assets/food/mashed_potato.png'),
  pumpkinSoup: require('./assets/food/pumpkin_soup.png'),
  bumpkinBroth: require('./assets/food/bumpkin_broth.png'),
  boiledEgg: require('./assets/food/boiled_eggs.png'),
  kaleStew: require('./assets/food/kale_stew.png'),
  mushroomSoup: require('./assets/food/mushroom_soup.png'),
  reindeerCarrot: require('./assets/food/reindeer_carrot.png'),
}
const Data = [
  {
    title: "Material",
    data: [
      Tools.axe, 
      Tools.woodPickaxe, 
      Tools.stonePickaxe, 
      Tools.ironPickaxe
    ]
  },
  {
    title: "Crops",
    data: [
      Crops.potato,
      Crops.pumpkin,
      Crops.carrot,
      Crops.cabbage,
      Crops.beetroot,
      Crops.cauliflower,
      Crops.parsnip,
      Crops.radish,
      Crops.wheat,
      Crops.kale,
    ]
  },
  // {
  //   title: "Food",
  //   data
  // }
]

export default function App() {
  const renderItem = ({item, index}) => { 
    return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemLogo} source={item} />
      {/* <Button style={styleProps.timerBtn}>Start</Button> */}
    </View>
    )
  }
  return (
    <ScrollView> 
    <View style={styles.mainContainer}>
      <StatusBar style='auto' />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.appTitle}>Sunflower Land Timer</Text>
        <Image style={styles.logo} source={Logo} />
      </View>
      
      <View style={styles.container}>
        <Text style={styles.title}>Timer</Text>
        <SectionList 
          sections={Data}
          keyExtraction={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.listHeader}>{title}</Text>
          )}
          renderItem={renderItem}
          />
      </View>
    </View>
    </ScrollView>
  );
}

const win = Dimensions.get('window')
const ratio = win.width/36;

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
    backgroundColor: 'red',
    width: '90%',
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'blue',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 10
  },
  itemLogo: {
    width: 30,
    height: 30,
    resizeMode : 'contain',

  }
});
