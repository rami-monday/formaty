const router = require("express").Router();
const { getUserFormsController, addFormController, getOneFormById, deletFormById } = require("../controllers/form.controller")

router.get("/getUserForms/:userId", getUserFormsController);
router.post("/addForm", addFormController);
router.get("/getFormById/:formId", getOneFormById);
router.delete("/deleteFormById/:formId", deletFormById);

module.exports = router;