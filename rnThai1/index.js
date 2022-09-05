/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

AppRegistry.registerComponent(appName, () => <App />);
