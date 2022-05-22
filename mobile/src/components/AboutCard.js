import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {darkTileColor, darkTintColor} from '../constants/colors';
import {TileHeader, TileText} from '../components/Text';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Linking} from 'react-native';

const AboutWrapper = styled.View`
  background: ${props => (props.green ? darkTintColor : darkTileColor)};
  border-radius: 25px;
  elevation: 7;
  margin-top: 10%;
  margin-bottom: ${props => (props.last ? '20px' : '0px')};
  padding: 20px;
  padding-bottom: 10px;
`;

const TitleWrapper = styled.View`
  width: 100%;
  padding-bottom: 10px;
`;

const gitURL = 'https://github.com/Szops/gdzie-jest-szop';

export const AboutCard = ({green, last, header, cardText}) => {
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);

  return (
    <AboutWrapper green={green} last={last}>
      <TitleWrapper>
        <TileHeader>{header}</TileHeader>
      </TitleWrapper>
      <TileText>{cardText}</TileText>
      <Icon.Button
        name={'sc-github'}
        color={'white'}
        size={60}
        onPress={() => Linking.openURL(gitURL)}
        backgroundColor={'darkTileColor'}
        underlayColor={'darkTileColor'}
        iconStyle={{marginRight: 5}}>
        {text.gitIcon}
      </Icon.Button>
    </AboutWrapper>
  );
};
