import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';

const formatTime = (duration) => {
  const isActive = useSelector((state) => state);
  const d = duration;
  let days = Math.floor(d / (1000 * 60 * 60 * 24));
  let hours = Math.floor((d / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((d / 1000 / 60) % 60);
  let seconds = Math.floor((d / 1000) % 60);
  let dDisplay = days > 0 ? days + 'd' : '';
  let hDisplay = hours > 0 ? hours + 'h' : '';
  let mDisplay = minutes > 0 ? minutes + 'm' : '';
  let sDisplay = seconds > 0 ? seconds + 's' : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

export default function Timer({ props }) {
  const ref = useRef(props).current;
  // console.log(ref);
  const item = ref.formatedItemState;
  // console.log(item);
  const setItem = ref.formatedSetItemState;
  // const itemState = item.state;
  const itemValue = item.value;
  const state = ref.startTimer;
  // console.log(state);
  // const [startTimer, setTimer] = useState(state);
  // useEffect(() => {
  //   if (startTimer) {
  //     const timer =
  //       itemValue > 0 &&
  //       setTimeout(
  //         setItem((prev) => ({ ...prev, value: itemValue - 5 })),
  //         1000,
  //       );
  //     if (itemValue === 0) {
  //       setTimer(false);
  //     }
  //     return () => clearInterval(timer);
  //   }
  // }, [setTimer]);

  return <Text>{formatTime(itemValue)}</Text>;
}

const styles = StyleSheet.create({});
