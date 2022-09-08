/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, {
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from 'react-native-maps';
import openMap from 'react-native-open-maps';
import CustomCallout from './CustomCallout';
import {Callout} from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const ipAddress = '192.168.1.178';
import Axios from 'axios';

const ASPECT_RATIO = width / height;
// 13.6970244, 100.5130343 codemobiles office
const LATITUDE = 35.6585848;
const LONGITUDE = 139.7432442;
const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type Props = {};

const Tab1Screen = (props: Props) => {
  const [markers, setMarkers] = useState<LatLng[]>([]);
  const [region, setRegion] = useState<Region>({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    loadMarkers();
  }, []);

  function loadMarkers() {}

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
      </MapView>
    </View>
  );
};

export default Tab1Screen;
