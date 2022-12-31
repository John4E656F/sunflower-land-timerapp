import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { useContext, useState, useEffect, useRef } from 'react';
import BoostListItem from './BoostListItem';
import { Logo } from '../../Utils/Assets';
import { DataBoostContext } from '../../Utils/Context';

export default function TimerView({ setBoostState }) {
  const DataBoosts = useContext(DataBoostContext);

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
              {DataBoosts.map((item, i) => (
                <BoostListItem item={item} key={item + i} setBoostState={setBoostState} />
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
