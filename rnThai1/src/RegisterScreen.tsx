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
  Alert,
} from 'react-native';
import React from 'react';
import CMEntry from './Utils/CMEntry';
import CMButton from './Utils/CMButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigationParams';

type Props = {};
type ScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = (props: Props) => {
  const navigation = useNavigation<ScreenProp>();

  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('./assets/img/gradient_bg.png')}>
      <View
        style={{
          backgroundColor: '#FFF7',
          margin: 30,
          padding: 20,
          borderRadius: 15,
        }}>
        {/* username  */}
        <CMEntry hint="Username" />
        {/* password */}
        <CMEntry hint="Password" icon="#FF0" secureTextEntry />
        <View style={{height: 8}} />
        {/* login button */}
        <CMButton
          title="Register"
          variant="contained"
          onPress={() => navigation.goBack()}
        />
        <View style={{height: 8}} />
        {/* register button */}
        <CMButton
          title="Cancel"
          variant="outline"
          onPress={() => navigation.goBack()}
        />
      </View>

      {/* Banner */}
      <Image
        source={require('./assets/img/header_react_native.png')}
        resizeMode="contain"
        style={{height: 70, width: '100%'}}
      />
    </ImageBackground>
  );
};

export default RegisterScreen;
