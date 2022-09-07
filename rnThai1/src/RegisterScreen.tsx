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
import {useSelector} from 'react-redux';
import {authSelector, register} from './store/slices/auth.slice';
import {User} from './types/user.type';
import {useAppDispatch} from './store/store';

type Props = {};
type ScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = (props: Props) => {
  const navigation = useNavigation<ScreenProp>();
  const authReducer = useSelector(authSelector);
  const dispatch = useAppDispatch();
  let user: User = {username: '', password: ''};

  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('./assets/img/gradient_bg.png')}>
      <Text>Count: {authReducer.count.toString()}</Text>
      <View
        style={{
          backgroundColor: '#FFF7',
          margin: 30,
          padding: 20,
          borderRadius: 15,
        }}>
        {/* username  */}
        <CMEntry
          hint="Username"
          icon="user"
          onChangeText={text => {
            user = {...user, username: text};
          }}
        />
        {/* password */}
        <CMEntry
          hint="Password"
          icon="lock"
          secureTextEntry
          onChangeText={text => {
            user = {...user, password: text};
          }}
        />
        <View style={{height: 8}} />
        {/* login button */}
        <CMButton
          title="Register"
          variant="contained"
          onPress={() => dispatch(register(user))}
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
