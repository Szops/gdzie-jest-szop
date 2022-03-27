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

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

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
    <ScreenWrapper list>
      <ListImageWrapper>
        <StyledImageBackground
          source={image}
          resizeMode="cover"></StyledImageBackground>
      </ListImageWrapper>
      <ListHeader
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <PointsList points={points} searchPhrase={searchPhrase} />
    </ScreenWrapper>
  );
}
