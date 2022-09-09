/**
 * @format
 */

import React, {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

const NavApp = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);
AppRegistry.registerComponent(appName, () => NavApp);
