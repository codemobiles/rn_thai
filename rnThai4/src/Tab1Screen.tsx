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
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        onPress={e => {}}
        initialRegion={region}
        style={styles.map}
        mapType="standard" // NORMAL, SATELLITE, HYBRID
      ></MapView>

      <Image
        resizeMode="contain"
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#000000',
          marginTop: 10,
        }}
        source={require('./assets/img/banner_react_map.png')}
      />
    </View>
  );
};

export default Tab1Screen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  banner: {
    height: 80,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  customView: {
    width: Platform.OS == 'ios' ? 190 : 160,
    height: 100,
  },
});
