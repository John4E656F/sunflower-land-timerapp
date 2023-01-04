import { registerRootComponent } from 'expo';
// import * as BackgroundFetch from 'expo-background-fetch';
// import * as TaskManager from 'expo-task-manager';

import App from './App';

// const FETCH_TASKNAME = 'countdown-task';
// const INTERVAL = 60;

// notifee.onBackgroundEvent(async ({ type, detail }) => {
//     const { notification, pressAction } = detail;

//     // Check if the user pressed the "Mark as read" action
//     if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {

//       // Remove the notification
//       await notifee.cancelNotification(notification.id);
//     }
//   });

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
