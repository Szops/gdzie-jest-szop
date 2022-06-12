import styled from 'styled-components';
import React from 'react';
import {Linking} from 'react-native';
import {homeImageColor} from '../constants/colors';
import {TileText} from '../components/Text';

const StyledImageBackground = styled.ImageBackground`
  padding: 25px;
  justify-content: center;
`;

const HomeBannerWrapper = styled.View`
  background: ${homeImageColor};
  border-radius: 25px;
  elevation: 7;
  margin-top: 5%;
`;

export const ArticleTile = ({text, image, url}) => {
  const image2 = {
    uri: image,
  };
  const loadInBrowser = () => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <HomeBannerWrapper>
      <StyledImageBackground
        source={image2}
        resizeMode="cover"
        imageStyle={{borderRadius: 25, opacity: 0.3}}>
        <TileText onPress={() => Linking.openURL(url)}>{text}</TileText>
      </StyledImageBackground>
    </HomeBannerWrapper>
  );
};
