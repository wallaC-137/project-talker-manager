const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  const tokenLength = 16;
  // console.log(token);
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  // console.log(authorization.length !== tokenLength);

  if (authorization.length !== tokenLength) {
    return res.status(401).json({ message: 'Token inválido' });
}
  next();
};

module.exports = tokenValidation;