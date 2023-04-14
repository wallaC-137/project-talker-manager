const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

const pathTalker = path.resolve(__dirname, 'talker.json');

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

const tokenGenerator = () => {
  const tokenLength = 16;
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < tokenLength; i += 1) {
    token += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length),
    );
  }
  return token;
};

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

// req 3
app.post('/login', (req, res) => {
  res.status(200).json({ token: tokenGenerator() });
});

app.listen(PORT, () => {
  console.log('Online');
});
