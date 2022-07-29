const router = require("express").Router();
const { getUsersController, addUserController } = require("../controllers/user.controller")

router.get("/getUsers", getUsersController);
router.post("/addUser", addUserController);

module.exports = router;
