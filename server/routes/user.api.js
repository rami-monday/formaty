const router = require("express").Router();
const { SignInController, SignUpController } = require("../controllers/user.controller")

router.get("/signIn", SignInController);
router.post("/signUp", SignUpController);

module.exports = router;
