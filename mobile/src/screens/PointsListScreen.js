import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import PointsList from '../components/PointsList';
import {getPoints} from '../api/szopPoints';
import {HugeText} from '../components/Text';
import {PointsContext} from '../context/PointsContextProvider';
import LoadingScreen from './LoadingScreen';
import {ScreenWrapper} from '../components/Wrapper';

export const PointsListScreenName = 'PointsListScreen';

export default function PointsListScreen() {
  const {points} = useContext(PointsContext);

  return points === null ? (
    <LoadingScreen />
  ) : (
    
    <ScreenWrapper>
      <PointsList points={points} />
    </ScreenWrapper>
  );
}
