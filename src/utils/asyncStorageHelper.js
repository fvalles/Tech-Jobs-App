/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log(e.message);
  }
  // console.log(`\nStored keys: ${JSON.stringify(keys)}\n`);
  return keys;
};

const getMultiple = async (keysArray) => {
  let values;
  try {
    values = await AsyncStorage.multiGet(keysArray);
  } catch (e) {
    console.log(e.message);
  }
  return values;
  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};

export const getAllData = async () => {
  let storedKeyValues = null;
  const storedKeys = await getAllKeys();
  if (storedKeys.length > 0) {
    storedKeyValues = await getMultiple(storedKeys);
    // console.log(`Stored key-values: ${JSON.stringify(storedKeyValues)}\n`);
  }
  return storedKeyValues;
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
  // console.log('Done removing item');
};

export const storeData = async (object) => {
  try {
    const { id, ...values } = object;
    const jsonValue = JSON.stringify(values);
    await AsyncStorage.setItem(id, jsonValue);
  } catch (e) {
    console.log(e.message);
  }
};
