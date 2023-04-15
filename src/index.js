const express = require('express');

const { fileReader, firstFileFound } = require('./middlewares/search');
const tokenGenerator = require('./middlewares/tokenGenerator');
const emailAndPassword = require('./middlewares/loginValidation');
// const wireOnFile = require('./middlewares/writeOnFile');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// wireOnFile();
// (async () => console.log(await wireOnFile()))();
// (async () => console.log('foi', await algo.fileReader()))()

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
app.post('/login', emailAndPassword, (_req, res) => {
  res.status(200).json({ token: tokenGenerator() });
});

// req 5
// app.post('/talker', async (req, res) => {
  // const algo = await wireOnFile(req.body);

  // console.log('algo', algo);

  // res.status(200).send(console.log('foi'));
// });

app.listen(PORT, () => {
  console.log('Online');
});
