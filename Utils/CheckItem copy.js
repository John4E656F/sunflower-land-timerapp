//NEED TO ADD NFT Boost and Food boost
export default function checkItem(itemName, boostState) {
  // const boost = boostState.boostState;
  // const treeHugger = boostState.boostState.treeHugger;
  console.log(boostState);
  let initialValue;
  let initialNotif;
  switch (itemName) {
    case 'Axe':
      initialValue =
        7200 -
        7200 * (boostState.treeHugger === true ? 0.2 : 0 + boostState.apprenticeBeaver === true || boostState.constructionBeaver === true ? 0.5 : 0);
      initialNotif = {
        title: 'Wood Timers up',
        body: "Tree's have regrown",
      };
      break;
    case 'Wood Pickaxe':
      initialValue = 14400 - 14400 * (boostState.coalFace === true ? 0.2 : 0);
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
      initialValue =
        300 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Potato Timers up',
        body: 'Potato is ready to harvest',
      };
      break;
    case 'Pumpkin':
      initialValue =
        1800 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Pumpkin Timers up',
        body: 'Pumpkin is ready to harvest',
      };
      break;
    case 'Carrot':
      initialValue =
        3600 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Carrot Timers up',
        body: 'Carrot is ready to harvest',
      };
      break;
    case 'Cabbage':
      initialValue =
        7200 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Cabbage Timers up',
        body: 'Cabbage is ready to harvest',
      };
      break;
    case 'Beetroot':
      initialValue =
        14400 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Beetroot Timers up',
        body: 'Beetroot is ready to harvest',
      };
      break;
    case 'Cauliflower':
      initialValue =
        28800 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Cauliflower Timers up',
        body: 'Cauliflower is ready to harvest',
      };
      break;
    case 'Parsnip':
      initialValue =
        43200 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0) *
        (boostState.mysteriousParsnip === true ? 0.5 : 0);
      initialNotif = {
        title: 'Parsnip Timers up',
        body: 'Parsnip is ready to harvest',
      };
      break;
    case 'Radish':
      initialValue =
        86400 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Radish Timers up',
        body: 'Radish is ready to harvest',
      };
      break;
    case 'Wheat':
      initialValue =
        86400 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
      initialNotif = {
        title: 'Wheat Timers up',
        body: 'Wheat is ready to harvest',
      };
      break;
    case 'Kale':
      initialValue =
        129600 *
        (1 - boostState.nancy === true || boostState.scarecrow === true || boostState.kuebiko === true ? 0.15 : 0) *
        (1 - boostState.seedSpecialist === true ? 0.05 : 0);
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
