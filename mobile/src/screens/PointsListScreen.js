import {View, Text} from 'react-native';
import styled from 'styled-components';
import React, {useContext, useState, useEffect} from 'react';
import PointsList from '../components/PointsList';
import image from '../images/listImage.jpg';
import {ImageBackground, StyleSheet} from 'react-native';
import {PointsContext} from '../context/PointsContextProvider';
import LoadingScreen from './LoadingScreen';
import {ScreenWrapper} from '../components/Wrapper';
import {ListHeader} from '../components/ListHeader';

export const PointsListScreenName = 'PointsListScreen';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

const ListImageWrapper = styled.View`
  background-image: url(image);
  height: 150px;
  width: 100%;
`;

export default function PointsListScreen() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const {points} = useContext(PointsContext);

  return points === null ? (
    <LoadingScreen />
  ) : (
    <>
      <ListImageWrapper>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
      </ListImageWrapper>
      <ListHeader {...searchPhrase} setSearchPhrase={setSearchPhrase} />
      <ScreenWrapper list>
        <PointsList points={points} searchPhrase={searchPhrase} />
      </ScreenWrapper>
    </>
  );
}
