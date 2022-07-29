const router = require("express").Router();
const { SignInController, SignUpController } = require("../controllers/user.controller")

router.get("/SignIn", SignInController);
router.post("/SignUp", SignUpController);

module.exports = router;
