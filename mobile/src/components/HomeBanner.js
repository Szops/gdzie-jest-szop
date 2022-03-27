import styled from 'styled-components';
import React from 'react';
import image from '../images/homeImage.jpg';
import {homeImageColor} from '../constants/colors';
import {Title} from '../components/Text';

const StyledImageBackground = styled.ImageBackground`
  padding-top: 25px;
  padding-bottom: 25px;
  justify-content: center;
`;

const HomeBannerWrapper = styled.View`
  background: ${homeImageColor};
  border-radius: 25px;
  elevation: 7;
  margin-top: 10%;
`;

export const HomeBanner = ({textUpper, textBottom}) => {
  return (
    <HomeBannerWrapper>
      <StyledImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{borderRadius: 25}}>
        <Title upper>{textUpper}</Title>
        <Title>{textBottom}</Title>
      </StyledImageBackground>
    </HomeBannerWrapper>
  );
};
