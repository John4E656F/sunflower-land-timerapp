import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';

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
});
