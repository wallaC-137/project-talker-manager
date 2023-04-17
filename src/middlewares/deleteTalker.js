const fs = require('fs').promises;
const { fileReader } = require('./search');

const pathTalker = 'src/talker.json';

const deleteTalker = async (req, res, next) => {
  const { id } = req.params;
  // const q = await firstFileFound(req.params.id);
  const talkerAll = await fileReader();
  const deleteT = talkerAll.filter((talker) => talker.id !== Number(id));
  await fs.writeFile(pathTalker, JSON.stringify(deleteT));
  // await fs.writeFile(pathTalker, deleteT);
  console.log(deleteT);
  next();
};

module.exports = deleteTalker;