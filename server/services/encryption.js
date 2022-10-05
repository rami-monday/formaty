const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

const validatePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const userSerializer = (user) => {
  const { _id, email, username } = user;
  return { _id, email, username };
};
module.exports = { hashPassword, validatePassword, userSerializer };
