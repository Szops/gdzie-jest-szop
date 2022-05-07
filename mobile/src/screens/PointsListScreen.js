import styled from 'styled-components';
import React, {useState} from 'react';
import PointsList from '../components/PointsList';
import image from '../images/listImage.jpg';
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

const ListImageWrapper = styled.View`
  background-image: url(image);
  height: 150px;
  width: 100%;
`;

function PointsListScreen({points}) {
  const [searchPhrase, setSearchPhrase] = useState('');
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

export default withObservables(['points'], ({points}) => ({
  points: PointsDAO.getPoints().observeWithColumns([
    'is_notifications_enabled',
  ]),
}))(PointsListScreen);
