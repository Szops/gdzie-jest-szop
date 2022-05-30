import {View, TouchableOpacity, Linking, Alert} from 'react-native';
import React from 'react';
import {TileHeader, TileText} from './Text';
import * as licensesJSON from '../constants/licenses.json';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/EvilIcons';

const parsedLicenses = Object.entries(licensesJSON)
  .map(([name, data]) => ({
    name,
    ...data,
  }))
  .filter(license => license.name !== 'default');

const LicensesList = () => {
  const handleOpenInBrowser = url => {
    Linking.openURL(url).catch(err => Alert.err("Couldn't load page", err));
  };
  return (
    <View>
      <TileHeader>USED MODULES</TileHeader>
      {parsedLicenses.map((license, idx) => (
        <Icon.Button
          key={idx}
          name={'sc-github'}
          color={'white'}
          size={32}
          onPress={() => handleOpenInBrowser(license.repository)}
          backgroundColor={'darkTileColor'}
          underlayColor={'darkTileColor'}
          iconStyle={{marginRight: 5}}>
          {license.name}
        </Icon.Button>
      ))}
    </View>
  );
};

export default LicensesList;
