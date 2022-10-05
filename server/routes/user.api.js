const router = require("express").Router();
const {
  SignInController,
  SignUpController,
  getAuthenticatedUser,
} = require("../controllers/user.controller");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

router.put("/signIn", SignInController);
router.post("/signUp", SignUpController);
router.get("/getUser", authenticationMiddleware, getAuthenticatedUser);
module.exports = router;
