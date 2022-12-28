import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from './Home';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <Home />
    </Provider>
  );
}
