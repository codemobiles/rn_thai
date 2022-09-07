/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import JSONFeedScreen from './JSONFeedScreen';
import CameraScreen from './CameraScreen';
import {RootStackParamList, RootTabParamList} from './RootNavigationParams';
import ExtraScreen from './ExtraScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#119CED',
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {color: '#fff'},
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const tab1: BottomTabNavigationOptions = {
  tabBarLabel: 'JSON',
  tabBarIcon: ({focused}: any) => (
    <Icon name="user" size={30} color={focused ? '#119CED' : '#0007'} />
  ),
};

const tab2: BottomTabNavigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({focused}: any) => (
    <Icon name="camera" size={30} color={focused ? '#119CED' : '#0007'} />
  ),
};

const SuccessTab = () => (
  <Tab.Navigator initialRouteName="Json" screenOptions={{headerShown: false}}>
    <Tab.Screen name="Json" component={JSONFeedScreen} options={tab1} />
    <Tab.Screen name="Camera" component={CameraScreen} options={tab2} />
    {/* <Tab.Screen name="Extra" component={ExtraScreen} /> */}
  </Tab.Navigator>
);

type RootStackProp = {
  isAuthened: boolean;
};
const RootStack = ({isAuthened}: RootStackProp) => (
  <Stack.Navigator initialRouteName={isAuthened ? 'Success' : 'Home'}>
    <Stack.Screen name="Home" component={HomeScreen} options={defaultOptions} />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={defaultOptions}
    />
    <Stack.Screen
      name="Success"
      component={SuccessTab}
      options={defaultOptions}
    />
  </Stack.Navigator>
);

export default RootStack;
