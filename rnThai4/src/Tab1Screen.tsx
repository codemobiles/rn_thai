/* eslint-disable react/self-closing-comp */
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
  Alert,
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

  async function addMarker(coordinate: LatLng) {
    console.log(JSON.stringify(coordinate));

    setRegion({...region, ...coordinate});
    setMarkers([...markers, coordinate]);

    try {
      let result = await Axios.post(
        `http://${ipAddress}:3001/record_position`,
        coordinate,
      );
      console.log(JSON.stringify(result));
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        onPress={e => addMarker(e.nativeEvent.coordinate)}
        initialRegion={region}
        style={styles.map}
        mapType="standard" // NORMAL, SATELLITE, HYBRID
      >
        {markers.map(coordinate => (
          <Marker key={JSON.stringify(coordinate)} coordinate={coordinate}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./assets/img/cmdev_icon.png')}
                style={{
                  height: 30,
                  width: 30,
                  borderColor: 'white',
                  borderRadius: 15,
                  borderWidth: 2,
                }}
              />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 12,
                  backgroundColor: '#0007',
                  borderRadius: 3,
                }}>
                {coordinate.latitude.toFixed(2)}°,{' '}
                {coordinate.longitude.toFixed(2)}°{' '}
              </Text>
            </View>

            <Callout tooltip style={styles.customView}>
              <CustomCallout>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  {/** Showing image in android is not possible now (Lib. Bug) */}
                  {Platform.OS === 'ios' ? (
                    <Image
                      resizeMode="cover"
                      source={require('./assets/img/cmdev_icon.png')}
                      style={{height: 20, width: 20, marginRight: 8}}
                    />
                  ) : null}

                  <Text style={{fontWeight: 'bold'}}>Pos: </Text>
                  <Text>
                    {parseFloat(coordinate.latitude.toString()).toFixed(2)} °,{' '}
                    {parseFloat(coordinate.longitude.toString()).toFixed(2)} °
                  </Text>
                </TouchableOpacity>
              </CustomCallout>
            </Callout>
          </Marker>
        ))}
      </MapView>

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
