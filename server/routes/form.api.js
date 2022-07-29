const router = require("express").Router();
const { getUserFormsController, addFormController, getOneFormById } = require("../controllers/form.controller")

router.get("/getUserForms", getUserFormsController);
router.post("/addForm", addFormController);
router.get("/getFormById", getOneFormById)

module.exports = router;