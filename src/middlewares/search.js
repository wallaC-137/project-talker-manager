const fs = require('fs').promises;
// const path = require('path');


// const pathTalker = path.resolve(__dirname, 'talker.json');


const pathTalker = 'src/talker.json';

const fileReader = async () => {
  try {
    const test = await fs.readFile(pathTalker, 'utf-8');
    return JSON.parse(test);
  } catch (err) {
    console.error(`error${err}`);
  }
};

const firstFileFound = async (idSearch) => {
  const date = await fileReader();
  const response = date.find(({ id }) => id === Number(idSearch));
  if (response) return response;
  return {};
};

module.exports = {
  fileReader,
  firstFileFound
}