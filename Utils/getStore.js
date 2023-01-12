import { useSelector } from 'react-redux';

export default function getStore({ itemName }) {
  let storeData;
  switch (itemName) {
    case 'Axe':
      storeData = useSelector(({ toolDomain }) => toolDomain.axe);
      break;
    case 'Wood Pickaxe':
      storeData = useSelector(({ toolDomain }) => toolDomain.woodPickaxe);
      break;
    case 'Stone Pickaxe':
      storeData = useSelector(({ toolDomain }) => toolDomain.stonePickaxe);
      break;
    case 'Iron Pickaxe':
      storeData = useSelector(({ toolDomain }) => toolDomain.ironPickaxe);
      break;
    case 'Potato':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.potato);
      break;
    case 'Pumpkin':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.pumpkin);
      break;
    case 'Carrot':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.carrot);
      break;
    case 'Cabbage':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.cabbage);
      break;
    case 'Beetroot':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.beetroot);
      break;
    case 'Cauliflower':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.cauliflower);
      break;
    case 'Parsnip':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.parsnip);
      break;
    case 'Radish':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.radish);
      break;
    case 'Wheat':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.wheat);
      break;
    case 'Kale':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.kale);
      break;
    case 'Pumpkin Soup':
      storeData = useSelector(({ foodDomain }) => foodDomain.pumpkinSoup);
      break;
    case 'Bumpkin Broth':
      storeData = useSelector(({ foodDomain }) => foodDomain.bumpkinBroth);
      break;
    case 'Boiled Egg':
      storeData = useSelector(({ foodDomain }) => foodDomain.boiledEgg);
      break;
    case 'Kale Stew':
      storeData = useSelector(({ foodDomain }) => foodDomain.kaleStew);
      break;
    case 'Mushroom Soup':
      storeData = useSelector(({ foodDomain }) => foodDomain.mushroomSoup);
      break;
    case 'Reindeer Carrot':
      storeData = useSelector(({ foodDomain }) => foodDomain.reindeerCarrot);
      break;
  }
  return storeData;
}
