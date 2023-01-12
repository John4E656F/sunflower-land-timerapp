import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import store from './redux/store';
import { Provider } from 'react-redux';
import Entry from './src/entry';

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Provider store={store}>
        <StatusBar style='auto' />
        <Entry />
      </Provider>
    </NavigationContainer>
  );
}
