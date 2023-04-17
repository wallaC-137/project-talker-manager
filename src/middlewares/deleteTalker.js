const fs = require('fs').promises;
const { fileReader } = require('./search');

const pathTalker = 'src/talker.json';

const deleteTalker = async (req, res, next) => {
  const { id } = req.params;
  const talkerAll = await fileReader();
  const deleteT = talkerAll.filter((talker) => talker.id !== Number(id));
  await fs.writeFile(pathTalker, JSON.stringify(deleteT));
  next();
};

module.exports = deleteTalker;