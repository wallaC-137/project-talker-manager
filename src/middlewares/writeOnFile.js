const fs = require('fs').promises;
const { fileReader } = require('./search');

const pathTalker = 'src/talker.json';

const writeOnFile = async (newTalker) => {
  const allTalkers = await fileReader();
  const lastTalker = { id: allTalkers.length + 1, ...newTalker };
  const insertTalker = [
    ...allTalkers,
    lastTalker,
  ];
  try {
    await fs.writeFile(pathTalker, JSON.stringify(insertTalker));
    return lastTalker;
  } catch (err) {
    console.error(err);
  }
};

module.exports = writeOnFile;
