import React from 'react';
import {Marker} from 'react-native-maps';
import {tintColor} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';

const SzopMarker = ({point}) => {
  return (
    <Marker
      title={point.street}
      description={point.description}
      coordinate={{
        latitude: point.latitude,
        longitude: point.longitude,
      }}
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
  );
};

export default SzopMarker;
