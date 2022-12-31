import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeStringData = async (itemName, value) => {
  try {
    await AsyncStorage.setItem(itemName, value);
  } catch (e) {
    console.log(e);
  }
};

export const storeObjectData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getStringData = async (itemName) => {
  try {
    const value = await AsyncStorage.getItem(itemName);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getObjectData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@boost');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
