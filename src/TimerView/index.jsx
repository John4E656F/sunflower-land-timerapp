import { AppState, StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useContext, useState, useEffect, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import List from './List';
import { Logo } from '../../utils/Assets';
import { DataToolsContext, DataCropsContext, DataFoodContext } from '../../utils/Context';
import { DateTime } from 'luxon';

export default function TimerView() {
  const DataTools = useContext(DataToolsContext);
  const DataCrops = useContext(DataCropsContext);
  const DataFood = useContext(DataFoodContext);
  const appState = useRef(AppState.currentState);
  const [resetCount, setResetCount] = useState(false);

  let backgroundDuration;

  //send bakgroundDuration to redux then use it inside List for calculation
  useEffect(() => {
    let initialTime;
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
        setResetCount(true);
        const endTime = DateTime.now();
        console.log(endTime);
        const end = DateTime.fromISO(endTime);
        const start = DateTime.fromISO(initialTime);
        var duration = end.diff(start).toObject();
        backgroundDuration = Math.floor((duration.milliseconds / 1000) % 60);
        console.log(backgroundDuration);
      } else {
        initialTime = DateTime.now();
        console.log(initialTime);
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [appState]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                <List item={item} key={item + i} reset={resetCount} />
              ))}
            </View>
            <Text style={styles.timerCategory}>Crops</Text>
            <View style={styles.listContainer}>
              {DataCrops.map((item, i) => (
                <List item={item} key={item + i} reset={resetCount} />
              ))}
            </View>
            <Text style={styles.timerCategory}>Foods</Text>
            <View style={styles.listContainer}>
              {DataFood.map((item, i) => (
                <List item={item} key={item + i} reset={resetCount} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E1E8EE',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
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
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#1287FE',
    minWidth: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#5AC142',
  },
  timerCategory: {
    fontWeight: '400',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#214918',
  },
  listContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
});
