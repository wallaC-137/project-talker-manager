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

module.exports = tokenGenerator;
