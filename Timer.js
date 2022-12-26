import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function Timer({ state, setState }) {
  const [timer, setTimer] = useState(state);

  useEffect(() => {
    switch (props.name) {
      case 'Axe':
        setTimer(120000);
        break;
      case 'Wood Pickaxe':
        setTimer(240000);
        break;
      case 'Stone Pickaxe':
        setTimer(4800000);
        break;
      case 'Iron Pickaxe':
        setTimer(1440000);
        break;
      default:
        setTimer(60);
    }
  }, []);

  return (
    <View>
      <Text>{timer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
