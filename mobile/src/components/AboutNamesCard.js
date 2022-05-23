import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {darkTileColor, darkTintColor} from '../constants/colors';
import {TileHeader, TileText} from './Text';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Linking} from 'react-native';

const AboutWrapper = styled.View`
  background: ${darkTileColor};
  border-radius: 25px;
  elevation: 7;
  margin-top: 10%;
  margin-bottom: 10px;
  padding: 20px;
`;

const TitleWrapper = styled.View`
  width: 100%;
  padding-bottom: 10px;
`;

export const AboutNamesCard = ({header, text}) => {
  return (
    <AboutWrapper>
      <TitleWrapper>
        <TileHeader>{header}</TileHeader>
      </TitleWrapper>
      <TileText>{text}</TileText>
    </AboutWrapper>
  );
};
