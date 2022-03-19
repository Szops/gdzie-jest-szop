import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {HomeCard} from '../components/HomeCard';

import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';

export const helloSzopScreenName = 'HelloSzopScreen';

const styles = StyleSheet.create({
  scroll: {
    width: '90%',
  },
});

export default function HelloSzopScreen() {
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);
  return (
    <ScreenWrapper home>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        style={styles.scroll}>
        <HomeCard primary />
        <HomeCard green />
        <HomeCard />
        <HomeCard />
        <HomeCard last />
      </ScrollView>
    </ScreenWrapper>
  );
}
