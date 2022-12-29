import React from 'react';
import { View, Button } from 'react-native';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

export default async function onCreateTriggerNotification(notif, value) {
  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'SFLTIMER',
    name: 'SFLTIMER Channel',
  });

  const date = new Date(Date.now());
  // date.setMilliseconds(value);

  // Create a time-based trigger
  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime() + value, // fire at 11:10am (10 minutes before meeting)
  };

  // Create a trigger notification
  await notifee.createTriggerNotification(
    {
      title: notif.Title,
      body: notif.body,
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    },
    trigger,
  );
}
