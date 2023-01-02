export default function checkBoost(itemName, setBoostState) {
  switch (itemName) {
    case 'treeHugger':
      setBoostState((prev) => ({
        ...prev,
        treeHugger: !prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
      }));
      break;
    case 'apprenticeBeaver':
      setBoostState((prev) => ({
        // ...prev.apprenticeBeaver,
        apprenticeBeaver: !prev.apprenticeBeaver,
      }));
      break;
    case 'constructionBeaver':
      setBoostState((prev) => ({
        // ...prev.constructionBeaver,
        constructionBeaver: !prev.constructionBeaver,
      }));
      break;
    case 'coalFace':
      setBoostState((prev) => ({
        // ...prev.coalFace,
        coalFace: !prev.coalFace,
      }));
      break;
    case 'seedSpecialist':
      setBoostState((prev) => ({
        // ...prev.seedSpecialist,
        seedSpecialist: !prev.seedSpecialist,
      }));
      break;
    case 'nancy':
      setBoostState((prev) => ({
        // ...prev.nancy,
        nancy: !prev.nancy,
      }));
      break;
    case 'scarecrow':
      setBoostState((prev) => ({
        // ...prev.scarecrow,
        scarecrow: !prev.scarecrow,
      }));
      break;
    case 'kuebiko':
      setBoostState((prev) => ({
        // ...prev.kuebiko,
        kuebiko: !prev.kuebiko,
      }));
      break;
    case 'mysteriousParsnip':
      setBoostState((prev) => ({
        // ...prev.mysteriousParsnip,
        mysteriousParsnip: !prev.mysteriousParsnip,
      }));
      break;
    case 'rushHour':
      setBoostState((prev) => ({
        // ...prev.rushHour,
        rushHour: !prev.rushHour,
      }));
      break;
  }
}
