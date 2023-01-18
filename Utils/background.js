import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';

export const startBackgroundTask = (interval, itemName, value, setValue) => {
  TaskManager.defineTask(itemName, async () => {
    interval = setInterval(() => {
      value - 1;
    }, 1000);
  });
  return interval;
};

export async function registerBackgroundFetchAsync(itemName) {
  console.log(itemName);
  return BackgroundFetch.registerTaskAsync(itemName, {
    minimumInterval: 60 * 15, // 15 minutes
    stopOnTerminate: false, // android only,
    startOnBoot: false, // android only
  });
}

export async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(itemName);
}
