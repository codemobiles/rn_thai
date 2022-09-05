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
        <View style={{flexDirection: 'row', padding: 16}}>
          {/* icon */}
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: '#F00',
              borderRadius: 15,
            }}
          />

          <TextInput placeholder="Username" style={{flex: 1}} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
