import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeStringData = async (itemName) => {
  const passKey = JSON.stringify('@' + itemName);
  console.log(passKey);
  const passValue = moment(new Date()).format('HH:mm:ss a');
  console.log(passValue);
  try {
    await AsyncStorage.setItem(passKey, passValue);
  } catch (e) {
    console.log(e);
  }
};

export const storeObjectData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@boost', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getStringData = async (itemName) => {
  const passKey = JSON.stringify('@' + itemName);
  try {
    const value = await AsyncStorage.getItem(passKey);

    if (value !== null) {
      console.log(value);
      // const startTime = moment(value).format('HH:mm:ss a');
      // const endTime = moment(new Date()).format('HH:mm:ss a');
      // console.log(startTime);
      // console.log(endTime);
      // let x = new Date();
      // var duration = moment.duration(x.diff(value));
      // console.log(duration);
      // let x = parseInt(duration.asHours());
      // console.log(x);
      // try {
      //   await AsyncStorage.removeItem(passKey);
      // } catch (e) {
      //   console.log(e);
      // }
      // return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getObjectData = async (setNewBoostState) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@boost');
    setNewBoostState(JSON.parse(jsonValue));
    return JSON.parse(jsonValue);
  } catch (e) {
    // error reading value
  }
};

export const getElapsedTime = async (itemName) => {
  const passKey = JSON.stringify('@' + itemName);
  try {
    const startTime = await AsyncStorage.getItem(passKey);
    const now = new Date();
    console.log(startTime);
    console.log(now);
    // return differenceInSeconds(now, Date.parse(startTime));
  } catch (err) {
    console.warn(err);
  }
};
