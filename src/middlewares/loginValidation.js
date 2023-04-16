const emailValidation = (req, res, next) => {
  const { email } = req.body;

  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  try {
    if (!email) {
      throw new Error('O campo "email" é obrigatório');
    }

    if (!regexEmail) {
      throw new Error('O "email" deve ter o formato "email@email.com"');
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  try {
    if (!password) {
      throw new Error('O campo "password" é obrigatório');
    }

    if (password.length < 6) {
      throw new Error('O "password" deve ter pelo menos 6 caracteres');
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

module.exports = {
  emailValidation,
  passwordValidation,
};
