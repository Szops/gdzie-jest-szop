import styled from 'styled-components';
import {Image} from 'react-native';
import {navDarkColor} from './src/constants/colors';
import React, {useState} from 'react';
import PointsList from '../components/PointsList';
import image from '../images/listImage.jpg';
import {AppleStyle} from 'react-native-scrollable-navigation-bar';
import LoadingScreen from './LoadingScreen';
import {ScreenWrapper} from '../components/Wrapper';
import {ListHeader} from '../components/ListHeader';
import PointsDAO from '../database/PointsDAO';
import withObservables from '@nozbe/with-observables';

export const PointsListScreenName = 'PointsListScreen';

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

function PointsListScreen({points}) {
  function HeaderBackgroundComponent(props) {
    return (
      <StyledImageBackground
        source={image}
        resizeMode="cover"></StyledImageBackground>
    );
  }

  const [searchPhrase, setSearchPhrase] = useState('');
  const updateInput = input => setSearchPhrase(input);
  return points === null ? (
    <LoadingScreen />
  ) : (
    <AppleStyle
      headerHeight={200}
      backgroundColor={'navDarkColor'}
      headerBackgroundColor={'transparent'}
      HeaderBackgroundComponent={HeaderBackgroundComponent}
      collapsible>
      <ScreenWrapper list>
        <ListHeader searchPhrase={searchPhrase} updateInput={updateInput} />
        <PointsList points={points} searchPhrase={searchPhrase} />
      </ScreenWrapper>
    </AppleStyle>
  );
}

export default withObservables(['points'], ({points}) => ({
  points: PointsDAO.getSzopPoints().observeWithColumns([
    'is_notifications_enabled',
  ]),
}))(PointsListScreen);
