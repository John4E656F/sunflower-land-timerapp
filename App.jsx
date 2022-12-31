import { StatusBar } from 'expo-status-bar';
import notifee from '@notifee/react-native';
import { StyleSheet, Modal, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TimerView from './src/TimerView/index';
import BoostView from './src/BoostView/index';
import { storeObjectData } from './Utils/Storage';

const Tab = createBottomTabNavigator();

export default function App() {
  const [boostState, setBoostState] = useState({
    treeHugger: false,
    apprenticeBeaver: false,
    constructionBeaver: false,
    coalFace: false,
    seedSpecialist: false,
    nancy: false,
    scarecrow: false,
    kuebiko: false,
    mysteriousParsnip: false,
    rushHour: false,
  });

  useEffect(() => {}, [boostState]);

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style='auto' />
      <Tab.Navigator
        initialRouteName='Timer'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Timer') {
              iconName = focused ? 'timer-outline' : 'timer';
            } else if (route.name === 'Boost') {
              iconName = focused ? 'construct-outline' : 'construct';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#95C8F4',
        })}
      >
        <Tab.Screen
          name='Timer'
          options={{
            title: 'Timer',
            headerStyle: {
              backgroundColor: '#95C8F4',
            },
          }}
        >
          {(props) => <TimerView {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name='Boost'
          options={{
            title: 'Boost',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
        >
          {() => <BoostView setBoostState={setBoostState} />}
        </Tab.Screen>
      </Tab.Navigator>
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
