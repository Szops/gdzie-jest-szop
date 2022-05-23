import styled from 'styled-components';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {LanguageContext} from '../context/LanguageContextProvider';
import {darkTileColor, darkTintColor} from '../constants/colors';
import {TileHeader, TileText} from '../components/Text';

const HomeWrapper = styled.View`
  background: ${props => (props.green ? darkTintColor : darkTileColor)};
  background-image: url(image);
  border-radius: 25px;
  elevation: 7;
  align-items: flex-start;
  margin-top: 10%;
  margin-bottom: ${props => (props.last ? '40px' : '0px')};
  padding: 20px;
`;

const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const HomeCard = ({green, last, header, text, iconName}) => {
  return (
    <HomeWrapper green={green} last={last}>
      <TitleWrapper>
        <Icon name={iconName} size={70} />
        <TileHeader>{header}</TileHeader>
      </TitleWrapper>
      <TileText>{text}</TileText>
    </HomeWrapper>
  );
};
