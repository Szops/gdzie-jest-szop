import {Alert} from 'react-native';

const host = `https://szop.herokuapp.com/api`;

export const getVersion = async () => {
  return await fetch(`${host}/version`)
    .then(res => {
      if (!res.ok) throw Error(`Couldn't fetch data from that source!`);
      return res.json();
    })
    .catch(err => {
      Alert.alert('ERROR', err.message);
      console.log(err.message);
    });
};

export const getPoints = async () => {
  return await fetch(`${host}/all-point`)
    .then(res => {
      if (!res.ok) throw Error(`Couldn't fetch data from that source!`);
      return res.json();
    })
    .catch(err => {
      Alert.alert('ERROR', err.message);
      console.log(err.message);
    });
};
