import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {darkTileColor, darkTintColor} from '../constants/colors';
import {TileHeader, TileText} from '../components/Text';

const HomeWrapper = styled.View`
  background: ${props => (props.green ? darkTintColor : darkTileColor)};
  background-image: url(image);
  border-radius: 25px;
  elevation: 7;
  margin-top: 10%;
  margin-bottom: ${props => (props.last ? '40px' : '0px')};
  padding: 20px;
`;

const TitleWrapper = styled.View`
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const HomeCard = ({green, last}) => {
  const {text} = useContext(LanguageContext);
  return (
    <HomeWrapper green={green} last={last}>
      <TitleWrapper>
        <TileHeader>{text.tileHeader}</TileHeader>
      </TitleWrapper>
      <TileText>{text.tileText}</TileText>
    </HomeWrapper>
  );
};
