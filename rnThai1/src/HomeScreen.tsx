import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Image
        style={{width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/dog.jpeg')}
      />
    </View>
  );
};

export default HomeScreen;
