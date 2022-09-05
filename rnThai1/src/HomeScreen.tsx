/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TextInputProps,
  Button,
} from 'react-native';
import React from 'react';
import CMEntry from './Utils/CMEntry';
import CMButton from './Utils/CMButton';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('./assets/img/gradient_bg.png')}>
      <View
        style={{
          backgroundColor: '#FFF7',
          margin: 30,
          borderRadius: 15,
        }}>
        {/* username  */}
        <CMEntry hint="Username" />
        {/* password */}
        <CMEntry hint="Password" icon="#FF0" secureTextEntry />
        <View style={{height: 8}} />
        {/* login button */}
        <CMButton title="Login" variant="contained" />
        <View style={{height: 8}} />
        {/* register button */}
        <CMButton title="Register" variant="outline" />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
