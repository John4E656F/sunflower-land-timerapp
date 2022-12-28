import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const formatTime = (duration) => {
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

export default function Timer({ itemName }) {
  const formatedItemState = itemName.replace(/\s+/g, '').toLowerCase();
  // console.log(formatedItemState);
  // let axe = useSelector(({ toolDomain }) => toolDomain.axe);
  // let woodPickaxe = useSelector(({ toolDomain }) => toolDomain.woodPickaxe.isActive);
  // let stonePickaxe = useSelector(({ toolDomain }) => toolDomain.stonePickaxe.isActive);
  // let ironPickaxe = useSelector(({ toolDomain }) => toolDomain.ironPickaxe.isActive);
  // console.log(axe);
  // console.log(state);
  // const [state, setState] = useState();
  let state;
  function getitem() {
    switch (itemName) {
      case 'Axe':
        state = useSelector(({ toolDomain }) => toolDomain.axe.isActive);
        break;
      case 'Wood Pickaxe':
        state = useSelector(({ toolDomain }) => toolDomain.woodPickaxe.isActive);
        break;
      case 'Stone Pickaxe':
        state = useSelector(({ toolDomain }) => toolDomain.stonePickaxe.isActive);
        break;
      case 'Iron Pickaxe':
        state = useSelector(({ toolDomain }) => toolDomain.ironPickaxe.isActive);
        break;
    }
  }
  getitem();

  // console.log(state);
  // const formatedItemName = 'set' + itemName.replace(/\s+/g, '') + 'Timer';
  // const formatedSetItemName = eval('set' + itemName.replace(/\s+/g, '') + 'Timer');
  // const state = useSelector(({ toolDomain }) => getRoute(toolDomain));
  // console.log(state);
  useEffect(() => {
    if (startTimer) {
      // const timer =
      //   itemValue > 0 &&
      // setTimeout(
      //   setItem((prev) => ({ ...prev, value: itemValue - 5 })),
      //   1000,
      // );
      if (itemValue === 0) {
        setTimer(false);
      }
      return () => clearInterval(timer);
    }
  }, []);
  return <Text>{formatTime(itemValue)}</Text>;
}

const styles = StyleSheet.create({});
