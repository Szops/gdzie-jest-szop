import {View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {HugeText, NormalText} from '../components/Text';
import {LanguageContext} from '../context/LanguageContextProvider';
import PushNotification from "react-native-push-notification";


export const helloSzopScreenName = 'HelloSzopScreen';

export default function HelloSzopScreen() {
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);
  return (
    <>
      <HugeText>{text.appName}</HugeText>
      <NormalText>
        {text.language}: {selectedLanguage}
      </NormalText>
      <TouchableOpacity
        onPress={() =>
          setSelectedLanguage(selectedLanguage == 'en' ? 'pl' : 'en')
        }>
        <View style={{backgroundColor: 'green'}}>
          <NormalText color="white"> SWITCH </NormalText>
        </View>
      </TouchableOpacity>

      <NormalText>
        Test powiadomienia
      </NormalText>  
      <TouchableOpacity
        onPress={() =>{
          PushNotification.localNotification({
            channelId: "szop-nt",
            title: "Test", // (optional)
            message: "Powiadomienie testowe", // (required)
        });}
        }>
        <View style={{backgroundColor: 'green'}}>
          <NormalText color="white"> TEST </NormalText>
        </View>
      </TouchableOpacity>
    </>
  );
}
