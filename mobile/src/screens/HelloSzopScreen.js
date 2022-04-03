import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {HomeCard} from '../components/HomeCard';
import {HomeBanner} from '../components/HomeBanner';
import {TextInput, Button, Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';
export const helloSzopScreenName = 'HelloSzopScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

export default function HelloSzopScreen() {
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);

  const [input, setInput] = React.useState();
  const [input2, setInput2] = React.useState();

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

        {/* Tylko do demo */}
        <TextInput
          placeholder="Godzina"
          keyboardType="numeric"
          value={input2}
          onChangeText={setInput2}
          style={{backgroundColor: 'white'}}
        />
        <TextInput
          placeholder="Minuty"
          keyboardType="numeric"
          value={input}
          onChangeText={setInput}
          style={{backgroundColor: 'white'}}
        />
        <Button
          title={'Test powiadomienia'}
          onPress={() => {
            Alert.alert(
              'Dodano powiadomienie na godzine:',
              new Date(
                2022,
                3,
                4,
                Number(input2) - 2,
                Number(input),
                0,
                0,
              ).toString(),
            );
            PushNotification.localNotificationSchedule({
              channelId: 'szop-nt',
              title: 'Test', // (optional)
              message: 'Powiadomienie testowe', // (required)
              date: new Date(
                2022,
                3,
                4,
                Number(input2) - 2,
                Number(input),
                0,
                0,
              ),
            });
          }}
        />
      </StyledScrollView>
      {/*<HugeText>{text.appName}</HugeText>
      <Button
        title={text.language + ': ' + selectedLanguage}
        onPress={() =>
          setSelectedLanguage(selectedLanguage == 'en' ? 'pl' : 'en')
        }
      />
      */}
    </ScreenWrapper>
  );
}
