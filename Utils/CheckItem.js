export default function checkItem(itemName) {
  let initialValue;
  let initialNotif;
  switch (itemName) {
    case 'Axe':
      initialValue = 7200;
      initialNotif = {
        title: 'Wood Timers up',
        body: "Tree's have regrown",
      };
      break;
    case 'Wood Pickaxe':
      initialValue = 14400;
      initialNotif = {
        title: 'Stone Timers up',
        body: "Stone's have regrown",
      };
      break;
    case 'Stone Pickaxe':
      initialValue = 28800;
      initialNotif = {
        title: 'Iron Timers up',
        body: "Iron's have regrown",
      };
      break;
    case 'Iron Pickaxe':
      initialValue = 86400;
      initialNotif = {
        title: 'Gold Timers up',
        body: "Gold's have regrown",
      };
      break;
    case 'Potato':
      initialValue = 300;
      initialNotif = {
        title: 'Potato Timers up',
        body: 'Potato is ready to harvest',
      };
      break;
    case 'Pumpkin':
      initialValue = 1800;
      initialNotif = {
        title: 'Pumpkin Timers up',
        body: 'Pumpkin is ready to harvest',
      };
      break;
    case 'Carrot':
      initialValue = 3600;
      initialNotif = {
        title: 'Carrot Timers up',
        body: 'Carrot is ready to harvest',
      };
      break;
    case 'Cabbage':
      initialValue = 7200;
      initialNotif = {
        title: 'Cabbage Timers up',
        body: 'Cabbage is ready to harvest',
      };
      break;
    case 'Beetroot':
      initialValue = 14400;
      initialNotif = {
        title: 'Beetroot Timers up',
        body: 'Beetroot is ready to harvest',
      };
      break;
    case 'Cauliflower':
      initialValue = 28800;
      initialNotif = {
        title: 'Cauliflower Timers up',
        body: 'Cauliflower is ready to harvest',
      };
      break;
    case 'Parsnip':
      initialValue = 43200;
      initialNotif = {
        title: 'Parsnip Timers up',
        body: 'Parsnip is ready to harvest',
      };
      break;
    case 'Radish':
      initialValue = 86400;
      initialNotif = {
        title: 'Radish Timers up',
        body: 'Radish is ready to harvest',
      };
      break;
    case 'Wheat':
      initialValue = 86400;
      initialNotif = {
        title: 'Wheat Timers up',
        body: 'Wheat is ready to harvest',
      };
      break;
    case 'Kale':
      initialValue = 129600;
      initialNotif = {
        title: 'Kale Timers up',
        body: 'Kale is ready to harvest',
      };
      break;
    case 'Pumpkin Soup':
      initialValue = 10;
      initialNotif = {
        title: 'Pumpkin Soup Timers up',
        body: 'Pumpkin Soup is ready!',
      };
      break;
    case 'Bumpkin Broth':
      initialValue = 1200;
      initialNotif = {
        title: 'Bumpkin Broth Timers up',
        body: 'Bumpkin Broth is ready!',
      };
      break;
    case 'Boiled Egg':
      initialValue = 3600;
      initialNotif = {
        title: 'Boiled Egg Timers up',
        body: 'Boiled Egg is ready!',
      };
      break;
    case 'Kale Stew':
      initialValue = 7200;
      initialNotif = {
        title: 'Kale Stew Timers up',
        body: 'Kale Stew is ready!',
      };
      break;
    case 'Mushroom Soup':
      initialValue = 600;
      initialNotif = {
        title: 'Mushroom Soup Timers up',
        body: 'Mushroom Soup is ready!',
      };
      break;
    case 'Reindeer Carrot':
      initialValue = 300;
      initialNotif = {
        title: 'Reindeer Carrot Timers up',
        body: 'Reindeer Carrot is ready!',
      };
      break;
  }
  const state = { initialValue, initialNotif };
  return state;
}
