import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TileHeader, TileText} from './Text';
import * as licensesJSON from '../constants/licenses.json';

const parsedLicenses = Object.entries(licensesJSON).map(([name, data]) => ({
  name,
  ...data,
}));

const LicensesList = () => {
  const renderItem = item => (
    <View>
      <TileText>{item.name}</TileText>
    </View>
  );
  return (
    <View>
      <TileHeader>Licenses:</TileHeader>
      {parsedLicenses.map(license => (
        <TouchableOpacity onPress={() => openBrowserAsync(license.licenseUrl)}>
          <TileText>{license.name}</TileText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LicensesList;
