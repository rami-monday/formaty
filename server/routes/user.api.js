const router = require("express").Router();
const { SignInController, SignUpController } = require("../controllers/user.controller")

router.put("/signIn", SignInController);
router.post("/signUp", SignUpController);

module.exports = router;
