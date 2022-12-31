export default function checkBoost(itemName, setBoostState) {
  switch (itemName) {
    case 'treeHugger':
      setBoostState((prev) => ({
        ...prev.treeHugger,
        treeHugger: true,
      }));
      break;
    case 'apprenticeBeaver':
      setBoostState((prev) => ({
        ...prev.apprenticeBeaver,
        apprenticeBeaver: true,
      }));
      break;
    case 'constructionBeaver':
      setBoostState((prev) => ({
        ...prev.constructionBeaver,
        constructionBeaver: true,
      }));
      break;
    case 'coalFace':
      setBoostState((prev) => ({
        ...prev.coalFace,
        coalFace: true,
      }));
      break;
    case 'seedSpecialist':
      setBoostState((prev) => ({
        ...prev.seedSpecialist,
        seedSpecialist: true,
      }));
      break;
    case 'nancy':
      setBoostState((prev) => ({
        ...prev.nancy,
        nancy: true,
      }));
      break;
    case 'scarecrow':
      setBoostState((prev) => ({
        ...prev.scarecrow,
        scarecrow: true,
      }));
      break;
    case 'kuebiko':
      setBoostState((prev) => ({
        ...prev.kuebiko,
        kuebiko: true,
      }));
      break;
    case 'mysteriousParsnip':
      setBoostState((prev) => ({
        ...prev.mysteriousParsnip,
        mysteriousParsnip: true,
      }));
      break;
    case 'rushHour':
      setBoostState((prev) => ({
        ...prev.rushHour,
        rushHour: true,
      }));
      break;
  }
}
