import {View, Button} from 'react-native';
import React, {useContext} from 'react';
import {HugeText, NormalText} from '../components/Text';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';

export const helloSzopScreenName = 'HelloSzopScreen';

export default function HelloSzopScreen() {
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);
  return (
    <ScreenWrapper>
      <HugeText>{text.appName}</HugeText>
      <Button
        title={text.language + ': ' + selectedLanguage}
        onPress={() =>
          setSelectedLanguage(selectedLanguage == 'en' ? 'pl' : 'en')
        }
      />
    </ScreenWrapper>
  );
}
