const tokenGenerator = require('./middlewares/tokenGenerator');
const tokenValidation = require('./middlewares/tokenValidation');
const writeOnFile = require('./middlewares/writeOnFile');
const updateTalker = require('./middlewares/updateTalker');
const deleteTalker = require('./middlewares/deleteTalker');
const { fileReader } = require('./middlewares/search');
const { firstFileFound } = require('./middlewares/search');
const { emailValidation } = require('./middlewares/loginValidation');
const { passwordValidation } = require('./middlewares/loginValidation');
const { nameValidation } = require('./middlewares/talkerValidation');
const { ageValidation } = require('./middlewares/talkerValidation');
const { talkValidation } = require('./middlewares/talkerValidation');
const { watchedAtValidation } = require('./middlewares/talkerValidation');
const { rateValidation } = require('./middlewares/talkerValidation');

module.exports = {
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
};