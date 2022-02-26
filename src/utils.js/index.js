import AsyncStorage from '@react-native-async-storage/async-storage';

export const processDate = date => {
  // const hour = new Date(date * 1000).getHours();
  // if (hour < 1) return new Date(date * 1000).getMinutes() + 'm';
  // if (hour > 24) return new Date(date * 1000).getDay() + 'd';
  // return hour + 'h';
  return new Date(date * 1000).toDateString();
};

export const storeCache = async value => {
  try {
    if (value === '') return;
    const cache = await AsyncStorage.getItem('@cache');
    if (!cache) {
      const stringified = JSON.stringify([value]);
      await AsyncStorage.setItem('@cache', stringified);
      return 1;
    }
    console.log('this cache value', value);
    const cachedData = JSON.parse(cache);
    if (cachedData.indexOf(value) < 0) {
      const toStore = [...cachedData, value];
      await AsyncStorage.setItem('@cache', JSON.stringify(toStore));
    }

    return 1; // represent success
  } catch (error) {
    console.log('Error: storeCache - ', error);
    return -1;
  }
};

export const getCache = async key => {
  try {
    const cache = await AsyncStorage.getItem(key);
    if (!cache) return -1;

    return JSON.parse(cache);
  } catch (error) {
    console.log('Error: getCache - ', error);
    return -1;
  }
};

export const clearCache = async () => {
  await AsyncStorage.clear();
};
