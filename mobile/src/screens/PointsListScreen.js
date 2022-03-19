import {View, Text} from 'react-native';
import styled from 'styled-components';
import React, {useContext} from 'react';
import PointsList from '../components/PointsList';
import image from '../images/listImage.jpg';
import {ImageBackground, StyleSheet} from 'react-native';
import {PointsContext} from '../context/PointsContextProvider';
import LoadingScreen from './LoadingScreen';
import {ScreenWrapper} from '../components/Wrapper';

export const PointsListScreenName = 'PointsListScreen';
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

const ListWrapper = styled.View`
  background-image: url(image);
  height: 150px;
  width: 100%;
`;

export default function PointsListScreen() {
  const {points} = useContext(PointsContext);

  return points === null ? (
    <LoadingScreen />
  ) : (
    <>
      <ListWrapper>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
      </ListWrapper>
      <ScreenWrapper list>
        <PointsList points={points} />
      </ScreenWrapper>
    </>
  );
}
