const fs = require('fs').promises;

const { fileReader, firstFileFound } = require('./search');

const pathTalker = 'src/talker.json';

const updateTalker = async (req, res, _next) => {
  const { id } = req.params;
  const findTalker = await firstFileFound(id);

  if (JSON.stringify(findTalker) === '{}') {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  const talkers = await fileReader();
  const talker = { id: Number(id), ...req.body };
  const talkersUpdated = talkers.map((element) => {
    if (element.id === Number(id)) return talker;
    return element;
  });
  await fs.writeFile(pathTalker, JSON.stringify(talkersUpdated));
  return res.status(200).json(talker);
};

module.exports = updateTalker;