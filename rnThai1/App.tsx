import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/HomeScreen';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <HomeScreen />
    </View>
  );
};

export default App;
