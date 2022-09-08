import {View, Text} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

type Props = {};

const Tab1Screen = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Tab1Screen;
