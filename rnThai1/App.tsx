/* eslint-disable react-native/no-inline-styles */
import {View, Text, ViewProps} from 'react-native';
import React from 'react';

type Props = {};

const App = (props: Props) => {
  // JSX
  // Dimension
  // height, wrapContent, flex
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
      <Box1 background="#FF0" label="App1" color="#000" />
      <Box1 background="#0F0" label="App2" color="#000" />
      <Box1 background="#F00" label="App3" color="#000" />
      <Box1 background="#F91" label="App4" color="#000" />
    </View>
  );
};

type Box1Prop = {
  color: string;
  label: string;
  background: string;
};

const Box1 = ({color, label, background, ...rest}: Box1Prop & ViewProps) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: 30,
        backgroundColor: background,
        height: 100,
      }}>
      {label}
    </Text>
  );
};

export default App;
