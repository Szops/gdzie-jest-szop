import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import PointsList from '../components/PointsList';
import {getPoints} from '../api/szopPoints';
import {HugeText} from '../components/Text';
import {PointsContext} from '../context/PointsContextProvider';
import LoadingScreen from './LoadingScreen';

export default function PointsListScreen() {
  const {points} = useContext(PointsContext);

  return points.length == 0 ? (
    <LoadingScreen />
  ) : (
    <PointsList points={points} />
  );
}
