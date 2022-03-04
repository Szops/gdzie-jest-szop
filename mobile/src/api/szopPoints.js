import {Alert} from 'react-native';
import * as data from './testRespons.json';

export const getPoints = async () => {
  const points = data.markers;

  return points;
};
