import React, {useContext} from 'react';
import {Marker} from 'react-native-maps';
import {MarkerContext} from '../context/MarkerContextProvider';
import {tintColor} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';

const SzopMarker = ({point}) => {
  const {updateMarker, displayMarker} = useContext(MarkerContext);
  const onPress = () => {
    displayMarker('true');
    updateMarker(point);
  };
  return (
    <Marker
      coordinate={{
        latitude: point.latitude,
        longitude: point.longitude,
      }}
<<<<<<< Updated upstream
      pinColor={point.isNotificationsEnabled ? 'green' : tintColor}>
      {/* Marker jest testowy, jak tylko zrobimy sensowne grafiki,to je podmienimy i zrobimy z tego ładny komponent */}
      <View style={{position: 'relative'}}>
        <Icon
          name="pets"
          // kolor będzie zależny od tego, czy w najbliższy, czasie będzie tu szop, ale tego jeszcze nie mamy, więc jest testowo po powiadomieniach
          color={point.isNotificationsEnabled ? tintColor : 'black'}
          size={26}
        />
        {point.isNotificationsEnabled && (
          <Icon
            style={{position: 'absolute', right: 0, bottom: 0}}
            name="notifications"
            color={'gold'}
            size={12}
          />
        )}
      </View>
    </Marker>
=======
      pinColor={tintColor}
      onPress={onPress}></Marker>
>>>>>>> Stashed changes
  );
};

export default SzopMarker;
