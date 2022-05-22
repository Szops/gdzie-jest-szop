import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {AboutCard} from '../components/AboutCard';
import {AboutNamesCard} from '../components/AboutNamesCard';

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
          cardText={text.aboutText[0]}
        />
        <AboutNamesCard header={text.aboutText[1]} text={text.aboutText[2]} />
        {/* <AboutCard
          header={'This app is open-source'}
          text={'Check it out on GitHub!'}
        /> */}
      </StyledScrollView>
    </ScreenWrapper>
  );
}
