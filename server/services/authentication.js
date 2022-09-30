const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.FORMATY_SIGNING_SECRET;
const DAY = 1000 * 60 * 60 * 24;
const generateUserToken = (user) => {
  const data = { ...user, expireDate: Date.now() + DAY };
  const token = jwt.sign(data, secretKey);
  return token;
};

const verifyToken = (token) => {
  try {
    const user = jwt.verify(token, secretKey);
    const currentDate = Date.now();

    if (currentDate >= user.expireDate) {
      return user;
    }

    return user;
  } catch (error) {
    return false;
  }
};

module.exports = { generateUserToken, verifyToken };
