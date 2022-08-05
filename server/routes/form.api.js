const router = require("express").Router();
const { getUserFormsController, addFormController, getOneFormById } = require("../controllers/form.controller")

router.get("/getUserForms/:userId", getUserFormsController);
router.post("/addForm", addFormController);
router.get("/getFormById/:formId", getOneFormById)

module.exports = router;