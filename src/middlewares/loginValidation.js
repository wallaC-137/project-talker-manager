const emailAndPassword = (req, res, next) => {
  const { email, password } = req.body;

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const passwordValidation = Number(password).length >= 6;
  
  try {
    if (!email) {
      throw new Error("O campo \"email\" é obrigatório")
    };

    if (!regexEmail) {
      throw new Error("O \"email\" deve ter o formato \"email@email.com\"")
    };

    if (!password) {
      throw new Error("O campo \"password\" é obrigatório")
    }
    
    if (!passwordValidation) {
      throw new Error("O \"password\" deve ter pelo menos 6 caracteres")
    };
  } catch (err) {
    return res.status(400).json({message: err.message});
  }
  next();
}

module.exports = emailAndPassword;