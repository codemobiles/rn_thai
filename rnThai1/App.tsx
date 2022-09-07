/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import AppNavigator from './src/AppNavigator';
import {kAUTHEN_SUCCESS, kYES} from './src/Constants';
import LoadingScreen from './src/LoadingScreen';

// HOC
type Props = {};

const App = (props: Props) => {
  const [isAuthened, setIsAuthened] = React.useState(false);
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  const navigation = useNavigation();

  React.useEffect(() => {
    checkSession();
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
      <AppNavigator isAuthened={isAuthened} />
    </View>
  );
};

export default App;
