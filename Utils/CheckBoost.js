export default function checkBoost(itemName, setBoostState) {
  switch (itemName) {
    case 'treeHugger':
      setBoostState((prev) => ({
        treeHugger: !prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'apprenticeBeaver':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.constructionBeaver === true ? false : !prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'constructionBeaver':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver === true ? false : false,
        constructionBeaver: !prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'coalFace':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: !prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'seedSpecialist':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: !prev.seedSpecialist,
        nancy: prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'nancy':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.scarecrow || prev.kuebiko === true ? false : !prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'scarecrow':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy === true ? false : false,
        scarecrow: prev.kuebiko === true ? false : !prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'kuebiko':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy === true ? false : false,
        scarecrow: prev.scarecrow === true ? false : false,
        kuebiko: !prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'mysteriousParsnip':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: !prev.mysteriousParsnip,
        rushHour: prev.rushHour,
      }));
      break;
    case 'rushHour':
      setBoostState((prev) => ({
        treeHugger: prev.treeHugger,
        apprenticeBeaver: prev.apprenticeBeaver,
        constructionBeaver: prev.constructionBeaver,
        coalFace: prev.coalFace,
        seedSpecialist: prev.seedSpecialist,
        nancy: prev.nancy,
        scarecrow: prev.scarecrow,
        kuebiko: prev.kuebiko,
        mysteriousParsnip: prev.mysteriousParsnip,
        rushHour: !prev.rushHour,
      }));
      break;
  }
}
