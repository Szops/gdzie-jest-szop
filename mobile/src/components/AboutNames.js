import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {darkTileColor, darkTintColor} from '../constants/colors';
import {TileText} from '../components/Text';

const AboutWrapper = styled.View`
  background: ${darkTileColor};
  border-radius: 25px;
  elevation: 7;
  margin-top: 10%;
  margin-bottom: 10px;
  padding: 20px;
`;

export const AboutNames = ({green, last, text}) => {
  return (
    <AboutWrapper green={green} last={last}>
      <TileText>{text}</TileText>
    </AboutWrapper>
  );
};
