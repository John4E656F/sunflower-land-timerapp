import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useContext, useState, useEffect, useRef } from 'react';
import List from './List';
import { Logo } from '../../Utils/Assets';
import { DataToolsContext, DataCropsContext, DataFoodContext } from '../../Utils/Context';

export default function TimerView(boostState) {
  const DataTools = useContext(DataToolsContext);
  const DataCrops = useContext(DataCropsContext);
  const DataFood = useContext(DataFoodContext);

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
                <List item={item} key={item + i} boostState={boostState} />
              ))}
            </View>
            <Text style={styles.timerCategory}>Crops</Text>
            <View style={styles.listContainer}>
              {DataCrops.map((item, i) => (
                <List item={item} key={item + i} boostState={boostState} />
              ))}
            </View>
            <Text style={styles.timerCategory}>Foods</Text>
            <View style={styles.listContainer}>
              {DataFood.map((item, i) => (
                <List item={item} key={item + i} boostState={boostState} />
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
