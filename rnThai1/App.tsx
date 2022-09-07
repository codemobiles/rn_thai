/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import AppNavigator from './src/AppNavigator';

// HOC
type Props = {};

const App = (props: Props) => {
  const [isAuthened, setIsAuthened] = React.useState(false);
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  const navigation = useNavigation();

  React.useEffect(() => {
    checkSession();
  });

  return (
    <View style={{flex: 1}}>
      <AppNavigator isAuthened={true} />
    </View>
  );
};

export default App;
