import RNPermissions, {
  NotificationOption,
  RESULTS,
} from 'react-native-permissions';
import OneSignal from 'react-native-onesignal';

// https://github.com/zoontek/react-native-permissions#checknotifications
// Permissions statuses
// Permission checks and requests resolve into one of these statuses:

export async function setupPushNotification() {
  await new Promise((resolve: any) => setTimeout(resolve, 2000));
  const options: NotificationOption[] = ['alert', 'badge', 'sound'];
  const result = await RNPermissions.requestNotifications(options);

  if (RESULTS.GRANTED === result.status) {
    // Return status
    // RESULTS.UNAVAILABLE	This feature is not available (on this device / in this context)
    // RESULTS.DENIED	The permission has not been requested / is denied but requestable
    // RESULTS.GRANTED	The permission is granted
    // RESULTS.LIMITED	The permission is granted but with limitations
    // RESULTS.BLOCKED	The permission is denied and not requestable anymore
    setupOneSignalWithAppId('44564b21-7fb4-42bd-b30c-9e0a25a923f1');
  }
}

function setupOneSignalWithAppId(id: string) {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(id);
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
}
