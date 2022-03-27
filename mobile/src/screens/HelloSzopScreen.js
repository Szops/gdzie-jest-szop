import styled from 'styled-components';
import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {HomeCard} from '../components/HomeCard';
import {HomeBanner} from '../components/HomeBanner';
export const helloSzopScreenName = 'HelloSzopScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

export default function HelloSzopScreen() {
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);
  return (
    <ScreenWrapper home>
      <StyledScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HomeBanner textUpper={'GDZIE JEST'} textBottom={'SZOP?'} />
        <HomeCard green />
        <HomeCard />
        <HomeCard />
        <HomeCard last />
      </StyledScrollView>
      {/*<HugeText>{text.appName}</HugeText>
      <Button
        title={text.language + ': ' + selectedLanguage}
        onPress={() =>
          setSelectedLanguage(selectedLanguage == 'en' ? 'pl' : 'en')
        }
      />*/}
    </ScreenWrapper>
  );
}
