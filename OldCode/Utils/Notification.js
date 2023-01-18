import React from 'react';
import notifee, { TriggerType } from '@notifee/react-native';

export default async function onDisplayNotification(notif) {
  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'SFLTIMER',
    name: 'SFLTIMER Channel',
    vibration: true,
    vibrationPattern: [300, 500],
  });

  // Display a notification
  await notifee.displayNotification({
    title: notif.Title,
    body: notif.body,
    android: {
      vibrationPattern: [300, 500],
      channelId,
      // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'sfltimer-trigger',
      },
    },
  });
}
