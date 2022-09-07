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
import React, {useState} from 'react';
import CMEntry from './Utils/CMEntry';
import CMButton from './Utils/CMButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigationParams';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {User} from './types/user.type';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from './store/store';
import {add, authSelector, login, reset} from './store/slices/auth.slice';

type Props = {};
type ScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<ScreenProp>();
  // let count = 0; // implicit declaration
  // const [count, setCount] = React.useState<number>(0);
  const authReducer = useSelector(authSelector);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User>({username: '', password: ''});

  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={require('./assets/img/gradient_bg.png')}>
      {/* <TouchableOpacity onPress={() => dispatch(add())}>
        <Text>{'Count: ' + authReducer.count}</Text>
      </TouchableOpacity>
      <Button title="reset" onPress={() => dispatch(reset(-1))} /> */}

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
          onChangeText={text => setUser({...user, username: text})}
        />
        {/* password */}
        <CMEntry
          hint="Password"
          color="#FF0"
          secureTextEntry
          onChangeText={text => setUser({...user, password: text})}
        />
        <Text>{JSON.stringify(user)}</Text>
        <View style={{height: 8}} />
        {/* login button */}
        <CMButton
          title="Login"
          variant="contained"
          onPress={async () => {
            const result = await dispatch(login(user));
            if (login.fulfilled.match(result)) {
              navigation.navigate('Success');
            } else {
              Alert.alert(authReducer.errorMsg!);
            }
          }}
        />
        <View style={{height: 8}} />
        {/* register button */}
        <CMButton
          title="Register"
          variant="outline"
          onPress={() => navigation.navigate('Register')}
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

export default HomeScreen;
