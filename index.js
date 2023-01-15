import { registerRootComponent } from 'expo';
import * as TaskManager from 'expo-task-manager';
import { useSelector, useDispatch } from 'react-redux';
import { startpotatoCounter } from './redux/crops/potatoSlice';

import App from './App';

TaskManager.defineTask('Potato', async () => {
  const { name, value } = useSelector(({ cropsDomain }) => cropsDomain.potato);
  let time = value;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    useDispatch(startpotatoCounter());
    // schedulePushNotification(name, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Pumpkin', async () => {
  let itemName = 'Pumpkin';
  let time = 1800;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Carrot', async () => {
  let itemName = 'Carrot';
  let time = 3600;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Cabbage', async () => {
  let itemName = 'Cabbage';
  let time = 7200;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Beetroot', async () => {
  let itemName = 'Beetroot';
  let time = 14400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Cauliflower', async () => {
  let itemName = 'Cauliflower';
  let time = 28800;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Parsnip', async () => {
  let itemName = 'Parsnip';
  let time = 43200;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Radish', async () => {
  let itemName = 'Radish';
  let time = 86400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Wheat', async () => {
  let itemName = 'Wheat';
  let time = 86400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});

TaskManager.defineTask('Kale', async () => {
  let itemName = 'Kale';
  let time = 129600;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});

const PumpkinSoup = 'Pumpkin Soup';
TaskManager.defineTask(PumpkinSoup, ({ data, error }) => {
  console.log('ok' + data);
  let itemName = 'Pumpkin Soup';
  let time = 10;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Bumpkin Broth', async () => {
  let itemName = 'Bumpking Broth';
  let time = 86400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Boiled Egg', async () => {
  let itemName = 'Boiled Egg';
  let time = 86400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Kale Stew', async () => {
  let itemName = 'Kale Stew';
  let time = 86400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Mushroom Soup', async () => {
  let itemName = 'Mushroom Soup';
  let time = 86400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});
TaskManager.defineTask('Reindeer Carrot', async () => {
  let itemName = 'Reindeer Carrot';
  let time = 86400;
  if (time > 0) {
    interval = setInterval(() => {
      time -= 1;
    }, 1000);
  } else if ((time = 0)) {
    schedulePushNotification(itemName, data);
  }
  return () => clearInterval(interval);
});

// registerRootComponent calls AppRegistry.registerComponent('main', async () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
