const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const ageValidation = (req, res, next) => {
  const { age } = req.body;

  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (!Number.isInteger(age) || age < 18) {
    return res.status(400)
    .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  next();
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  
  if (!('watchedAt' in talk)) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!('rate' in talk)) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  next();
};

const watchedAtValidation = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;

  const dateReg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
  .test(watchedAt);
  if (!dateReg) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

const rateValidation = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;

  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return res.status(400)
    .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

module.exports = {
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
};