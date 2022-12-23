import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

//Assets
const Logo = require('./assets/icon_large.png');

const List = ({ title, itemTitle }) => {
  <View styles={styles.itemContainer}>
    {/* <Image style={styles.itemLogo} source={require('@expo')} /> */}
    {/* <Text style={styles.timer}>{timer}</Text> */}
    <Button style={styleProps.timerBtn}>Start</Button>
  </View>;
};

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.appTitle}>Sunflower Land Timer</Text>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.container}>
        <Text>Hello Worlds!</Text>
        <StatusBar style='auto' />
        {/* <List /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#74B1F9',
    alignItems: 'center',
    paddingTop: '15%',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: 'red',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 10,
  },
  itemContainer: {
    backgroundColor: 'red',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 10,
  },
});
