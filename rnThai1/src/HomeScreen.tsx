/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import React from 'react';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('./assets/img/gradient_bg.png')}>
      <View
        style={{
          height: 100,
          backgroundColor: '#FFF7',
          margin: 30,
          borderRadius: 15,
        }}>
        {/* username name */}
        <CMEntry />
      </View>
    </ImageBackground>
  );
};

const CMEntry = () => {
  return (
    <View style={{flexDirection: 'row', padding: 16, alignItems: 'center'}}>
      {/* icon */}
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: '#F00',
          borderRadius: 15,
        }}
      />

      <TextInput
        placeholder="Username"
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#0004',
          paddingLeft: 16,
          marginLeft: 16,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default HomeScreen;
