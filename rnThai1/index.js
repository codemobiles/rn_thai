/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import OneSignal from 'react-native-onesignal';

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId('44564b21-7fb4-42bd-b30c-9e0a25a923f1');
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log('Prompt response:', response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  notificationReceivedEvent => {
    console.log(
      'OneSignal: notification will show in foreground:',
      notificationReceivedEvent,
    );
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  },
);

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification);
});

// Hoc
const NavApp = () => (
  <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => NavApp);
