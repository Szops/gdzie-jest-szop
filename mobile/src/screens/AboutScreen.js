import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {AboutCard} from '../components/AboutCard';
import {AboutNames} from '../components/AboutNames';
import {HomeBanner} from '../components/HomeBanner';
import {TextInput, Button, Alert} from 'react-native';
import {getPoints} from '../api/szopPoints';
import PointsDAO from '../database/PointsDAO';
export const AboutScreenName = 'AboutScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

export default function AboutScreen() {
  const [input, setInput] = React.useState();
  const [input2, setInput2] = React.useState();

  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);

  return (
    <ScreenWrapper about>
      <StyledScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <AboutCard
          green
          header={text.aboutHeader[0]}
          text={text.aboutText[0]}
        />
        <AboutNames text={text.aboutText[1]} />
      </StyledScrollView>
    </ScreenWrapper>
  );
}
