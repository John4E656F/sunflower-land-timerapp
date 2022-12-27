import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Home from './Home';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar style='auto' />
        <Home />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#74B1F9',
    alignItems: 'center',
    paddingTop: '15%',
  },
});
