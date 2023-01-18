import React from 'react';
import * as Notifications from 'expo-notifications';

export default async function schedulePushNotification(notif) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: notif.name + ' is ready for harvest! 🌻',
      body: 'Click here to get back farming!',
      data: { data: 'goes here' },
    },
    trigger: { seconds: notif.value },
  });
}
