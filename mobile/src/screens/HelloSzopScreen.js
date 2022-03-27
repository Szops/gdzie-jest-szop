import {View, Button} from 'react-native';
import React, {useContext} from 'react';
import {HugeText, NormalText} from '../components/Text';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import PushNotification from 'react-native-push-notification';

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
      {/*<Button
        title={'Test powiadomienia'}
        onPress={() =>{
          PushNotification.localNotificationSchedule({
            channelId: "szop-nt",
            title: "Test", // (optional)
            message: "Powiadomienie testowe", // (required)
            date: new Date(Date.now() + 10 * 1000), // in 10 sec
            allowWhileIdle: true, 

        });}
        }
      />*/}
    </ScreenWrapper>
  );
}
