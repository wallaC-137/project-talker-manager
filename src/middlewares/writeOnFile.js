const { fileReader } = require('./search');
const fs = require('fs').promises;

const pathTalker = 'src/talker.json';

const wireOnFile = async (newTalker) => {
  const allTalkers = await fileReader();
  // console.log([...allTalkers, { id: allTalkers.length + 1, ...newTalker }]);
  const insertTalker = [
    ...allTalkers,
    { id: allTalkers.length + 1, ...newTalker },
  ];
  try {
    await fs.writeFile(pathTalker, JSON.stringify(insertTalker));
    return await fileReader();
  } catch (err) {}
  // console.log(allTalkers);
  // return a;
};

module.exports = wireOnFile;
