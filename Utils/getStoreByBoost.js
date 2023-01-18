import { useSelector } from 'react-redux';

export default function getStoreByBoost({ itemName }) {
  let storeData;
  switch (itemName) {
    case 'treeHugger':
      storeData = useSelector(({ toolDomain }) => toolDomain.axe.treeHugger.isActive);
      break;
    case 'apprenticeBeaver':
      storeData = useSelector(({ toolDomain }) => toolDomain.axe.apprenticeBeaver.isActive);
      break;
    case 'constructionBeaver':
      storeData = useSelector(({ toolDomain }) => toolDomain.axe.constructionBeaver.isActive);
      break;
    case 'seedSpecialist':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.potato.seedSpecialist.isActive);
      break;
    case 'nancy':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.potato.nancy.isActive);
      break;
    case 'scarecrow':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.potato.scarecrow.isActive);
      break;
    case 'kuebiko':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.potato.kuebiko.isActive);
      break;
    case 'mysteriousParsnip':
      storeData = useSelector(({ cropsDomain }) => cropsDomain.parsnip.mysteriousParsnip.isActive);
      break;
    // case 'Pumpkin Soup':
    //   storeData = useSelector(({ foodDomain }) => foodDomain.pumpkinSoup);
    //   break;
    // case 'Bumpkin Broth':
    //   storeData = useSelector(({ foodDomain }) => foodDomain.bumpkinBroth);
    //   break;
    // case 'Boiled Egg':
    //   storeData = useSelector(({ foodDomain }) => foodDomain.boiledEgg);
    //   break;
    // case 'Kale Stew':
    //   storeData = useSelector(({ foodDomain }) => foodDomain.kaleStew);
    //   break;
    // case 'Mushroom Soup':
    //   storeData = useSelector(({ foodDomain }) => foodDomain.mushroomSoup);
    //   break;
    // case 'Reindeer Carrot':
    //   storeData = useSelector(({ foodDomain }) => foodDomain.reindeerCarrot);
    //   break;
  }
  return storeData;
}
