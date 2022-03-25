import {Alert} from 'react-native';

const host = `https://gdzie-jest-szop-api.herokuapp.com`;

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
  return await fetch(`${host}/points`)
    .then(res => {
      if (!res.ok) throw Error(`Couldn't fetch data from that source!`);
      return res.json();
    })
    .catch(err => {
      Alert.alert('ERROR', err.message);
      console.log(err.message);
    });
};
