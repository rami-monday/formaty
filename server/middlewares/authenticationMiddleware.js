const { verifyToken } = require("../services/authentication");

const authenticationMiddleware = (req, res, next) => {
  const { token } = req.headers;
  const user = verifyToken(token);
  if (!user) {
    res.status(403).send({ msg: "user not authenticated" });
    return;
  }
  req.user = user;
  next();
};

module.exports = authenticationMiddleware;
