import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

type Props = {};

const ScannerScreen = (props: Props) => {
  const route = useRoute();
  React.useEffect(() => {
    console.log(route.params?.token);
  });

  return (
    <View>
      <Text>ScannerScreen</Text>
    </View>
  );
};

export default ScannerScreen;
