const express = require('express');

const {
  fileReader,
  firstFileFound,
  tokenGenerator,
  emailValidation,
  passwordValidation,
  tokenValidation,
  writeOnFile,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  updateTalker,
  deleteTalker,
} = require('./pathsImports');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// req 1
app.get('/talker', async (req, res) => {
  const data = await fileReader();
  res.status(200).json(data || []);
});

// req 2
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await firstFileFound(id);
  if ('name' in data) return res.status(200).json(data);

  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

// req 3 e 4
app.post('/login', emailValidation, passwordValidation, (_req, res) => {
  res.status(200).json({ token: tokenGenerator() });
});

// req 5
app.post('/talker',
tokenValidation,
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
rateValidation,
async (req, res) => {
  const lastTalker = await writeOnFile(req.body);
  res.status(201).send(lastTalker);
});

// req 6
app.put('/talker/:id',
tokenValidation,
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
rateValidation,
updateTalker);

// req 7 
app.delete('/talker/:id',
tokenValidation,
deleteTalker,
async (req, res) => res.status(204).end());

app.listen(PORT, () => {
  console.log('Online');
});
