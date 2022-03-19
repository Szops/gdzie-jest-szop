import styled from 'styled-components';
import React from 'react';
import image from '../images/homeImage.jpg';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  darkTileColor,
  darkTintColor,
  homeImageColor,
} from '../constants/colors';
import {Title, TileHeader, TileText} from '../components/Text';
import {Lorem1} from '../constants/text.json';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 6,
  },
});

const HomeCardWrapper = styled.View`
  background: ${props =>
    props.primary
      ? homeImageColor
      : props.green
      ? darkTintColor
      : darkTileColor};
  background-image: url(image);
  border-radius: 25px;
  height: ${props => (props.primary ? '150px' : '327px')};
  width: 100%;
  elevation: 7;
  margin-top: 10%;
  margin-bottom: ${props => (props.last ? '40px' : '0px')}; ;
`;

export const HomeCard = props => {
  return props.primary === true ? (
    <HomeCardWrapper {...props}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{borderRadius: 25}}
        style={styles.image}>
        <Title upper>GDZIE JEST</Title>
        <Title>SZOP?</Title>
      </ImageBackground>
    </HomeCardWrapper>
  ) : (
    <HomeCardWrapper {...props}>
      <TileHeader>
        ABOUT{'\n'}THE{'\n'}PROJECT
      </TileHeader>
      <TileText>{Lorem1}</TileText>
    </HomeCardWrapper>
  );
};
