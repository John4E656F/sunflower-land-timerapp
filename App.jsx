import { StatusBar } from 'expo-status-bar';
import notifee from '@notifee/react-native';
import { StyleSheet, Modal, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect, useRef } from 'react';

import Home from './Home';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <StatusBar style='auto' />
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#74B1F9',
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
