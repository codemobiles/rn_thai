import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {useAppDispatch} from './store/store';
import {useSelector} from 'react-redux';

type RootStackParamList = {
  CameraScreen: {profileId: number; name: string};
};

type CameraScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CameraScreen'
>;

interface CameraScreenProps {
  navigation: CameraScreenNavigationProp;
}

const CameraScreen: React.FC<CameraScreenProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <ImageBackground
      source={require('./assets/img/bg.png')}
      style={styles.root}>
      <Image
        style={styles.banner}
        resizeMode="contain"
        source={require('./assets/img/banner_react_qr_camera.png')}
      />

      {/* Buttons section */}
      <View style={styles.buttonSection}>
        {/* CAMERA */}
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>CAMERA</Text>
        </TouchableOpacity>

        {/* CAMERA  + CROP*/}
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>CAMERA+CROP</Text>
        </TouchableOpacity>

        {/* GALLERY + CROP*/}
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>GALLERY</Text>
        </TouchableOpacity>
      </View>

      {/* ternery condtion */}
      {false && (
        <>
          <Image
            source={cameraReducer.image}
            style={styles.previewImage}
            resizeMode="contain"
          />

          <TouchableOpacity onPress={() => {}} style={styles.upload_button}>
            <Text style={styles.text}>UPLOAD</Text>
          </TouchableOpacity>
        </>
      )}
    </ImageBackground>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  root: {flex: 1, flexDirection: 'column', paddingLeft: 20, paddingRight: 20},
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  banner: {marginLeft: 20, marginRight: 20, height: 100, width: '100%'},
  button: {
    marginBottom: 10,
    height: 40,
    padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  previewImage: {flex: 1, width: '100%', marginBottom: 20},
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  upload_button: {
    borderRadius: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    width: 300,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  text_upload: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 10,
    color: '#FFFFFF',
  },
});
