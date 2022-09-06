/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import JSONFeedScreen from './JSONFeedScreen';
import CameraScreen from './CameraScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SuccessTab = () => (
  <Tab.Navigator initialRouteName="Json">
    <Tab.Screen name="Json" component={JSONFeedScreen} />
    <Tab.Screen name="Camera" component={CameraScreen} />
  </Tab.Navigator>
);

const RootStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Success" component={SuccessTab} />
  </Stack.Navigator>
);

export default RootStack;
