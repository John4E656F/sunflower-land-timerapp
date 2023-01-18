export default function checkBoost(itemName, boostState) {
  switch (itemName) {
    case 'treeHugger':
      return boostState.treeHugger;
      break;
    case 'apprenticeBeaver':
      return boostState.constructionBeaver === true ? false : boostState.apprenticeBeaver;
      break;
    case 'constructionBeaver':
      return boostState.constructionBeaver;
      break;
    case 'coalFace':
      return boostState.coalFace;
      break;
    case 'seedSpecialist':
      return boostState.seedSpecialist;
      break;
    case 'nancy':
      return boostState.kuebiko || boostState.scarecrow === true ? false : boostState.nancy;
      break;
    case 'scarecrow':
      return boostState.kuebiko === true ? false : boostState.scarecrow;
    case 'kuebiko':
      return boostState.kuebiko;
      break;
    case 'mysteriousParsnip':
      return boostState.mysteriousParsnip;
      break;
    case 'rushHour':
      return boostState.rushHour;
      break;
  }
}
