import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {darkTileColor, darkTintColor} from '../constants/colors';
import {TileHeader, TileText} from '../components/Text';

const AboutWrapper = styled.View`
  background: ${props => (props.green ? darkTintColor : darkTileColor)};
  border-radius: 25px;
  elevation: 7;
  margin-top: 10%;
  margin-bottom: ${props => (props.last ? '40px' : '0px')};
  padding: 20px;
`;

const TitleWrapper = styled.View`
  width: 100%;
  padding-bottom: 10px;
`;

export const AboutCard = ({green, last, header, text}) => {
  return (
    <AboutWrapper green={green} last={last}>
      <TitleWrapper>
        <TileHeader>{header}</TileHeader>
      </TitleWrapper>
      <TileText>{text}</TileText>
    </AboutWrapper>
  );
};
