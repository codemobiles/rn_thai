import {View, Image} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        resizeMode="contain"
        source={require('./assets/img/cmdev_icon.png')}
        style={{height: 150, width: 150}}
      />
    </View>
  );
};

export default LoadingScreen;
