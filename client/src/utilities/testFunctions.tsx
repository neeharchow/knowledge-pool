import Chance from "chance";

export const generateRandomData = (entries: number) => {
  var chance = Chance();
  var returnDict: any = {};
  for (var i = 0; i < entries; i++) {
    const newId = chance.integer({ min: 1111, max: 9999 });
    returnDict[newId] = {
      id: newId,
      title: chance.sentence({ words: 4 }),
      dropNumber: chance.integer({ min: 0, max: 999 }),
      credibilityScore: chance.integer({ min: 1, max: 10 }),
    };
  }
  console.log(returnDict);
  return returnDict;
};
