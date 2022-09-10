/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, View} from 'react-native';

import AppNavigator from './src/AppNavigator';
import {kAUTHEN_SUCCESS, kYES} from './src/Constants';
import LoadingScreen from './src/LoadingScreen';
import {requestNotifications, RESULTS} from 'react-native-permissions';
import {setupPushWithAppId} from './src/PushUtil';
import {request, PERMISSIONS} from 'react-native-permissions';
import {setupPushNotification} from './src/NotificationUtil';
// HOC
type Props = {};

const App = (props: Props) => {
  const [isAuthened, setIsAuthened] = React.useState(false);
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  const navigation = useNavigation();

  React.useEffect(() => {
    checkSession();
    setupPushNotification();
  });

  async function checkSession() {
    const _isAuthened = await AsyncStorage.getItem(kAUTHEN_SUCCESS);
    if (_isAuthened && _isAuthened === kYES) {
      setIsAuthened(true);
    }

    await new Promise((resolve: any) => setTimeout(resolve, 1000));
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingScreen />;
  }

  return (
    <View style={{flex: 1}}>
      <AppNavigator
        isAuthened={isAuthened}
        onSignOut={async () => {
          await AsyncStorage.clear();
          Alert.alert('Signout');
          navigation.dispatch(
            StackActions.replace('Home', {
              screen: 'Success',
            }),
          );
        }}
      />
    </View>
  );
};

export default App;
