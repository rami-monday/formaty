const User = require("../models/user.model");
const { generateUserToken } = require("../services/authentication");
const {
  hashPassword,
  validatePassword,
  userSerializer,
} = require("../services/encryption");

const getAuthenticatedUser = (req, res) => {
  const user = { ...req.user };
  res.send(user);
};

const SignInController = async function (req, res) {
  const { email, password } = req.body;
  try {
    const usersFromDB = await User.findOne({ email: email });
    if (!usersFromDB) {
      res.status(404).send("email doesn't exist");
      return;
    }
    const isPasswordValid = await validatePassword(
      password,
      usersFromDB.password
    );
    if (!isPasswordValid) {
      res.status(400).send("wrong password");
      return;
    }
    const serializedUser = userSerializer(usersFromDB);
    const userToken = generateUserToken(serializedUser);
    res.send({ token: userToken });
  } catch (error) {
    res.status(error?.status).send({ error: error.msg });
  }
};

const SignUpController = async function (req, res) {
  const newUser = req.body;
  try {
    const checkIfEmailExists = await User.findOne({ email: newUser.email });

    if (checkIfEmailExists) {
      res.status(404).send("email already exists");
      return;
    }
    const checkIfUsernameExists = await User.findOne({
      username: newUser.username,
    });

    if (checkIfUsernameExists) {
      res.status(404).send("username already exists");
      return;
    }
    newUser.password = await hashPassword(newUser.password);
    const userDb = new User(newUser);
    const dbResponse = await userDb.save();
    const serializedUser = userSerializer(dbResponse);
    const userToken = generateUserToken(serializedUser);
    res.send({ token: userToken });
  } catch (error) {
    res.status(error?.status).send({ error: error.msg });
  }
};

module.exports = { SignInController, SignUpController, getAuthenticatedUser };
