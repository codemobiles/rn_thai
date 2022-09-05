import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './src/HomeScreen';
import AppNavigator from './src/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

// HOC
type Props = {};

const App = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
