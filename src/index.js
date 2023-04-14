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
    console.log(JSON.parse(test));
    return JSON.parse(test);
  } catch (error) {}
};

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const data = await fileReader();
  res.status(200).json(data || []);
});

app.listen(PORT, () => {
  console.log('Online');
});
