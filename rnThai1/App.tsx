import React from 'react';
import {View} from 'react-native';

import AppNavigator from './src/AppNavigator';

// HOC
type Props = {};

const App = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator isAuthened={true} />
    </View>
  );
};

export default App;
