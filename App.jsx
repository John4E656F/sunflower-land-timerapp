import { StatusBar } from 'expo-status-bar';
import notifee from '@notifee/react-native';
import { StyleSheet, Modal, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TimerView from './src/TimerView/index';
import BoostView from './src/BoostView/index';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar style='auto' />
          <Stack.Navigator initialRouteName='Timer'>
            <Stack.Screen name='Timer' component={TimerView} options={{ title: 'Timer View' }} />
          </Stack.Navigator>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E1E8EE',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonAccept: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    opacity: 80,
  },
  acceptTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  refuseTextStyle: {
    color: 'red',
    fontWeight: '400',
    textAlign: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
