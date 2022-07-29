const router = require("express").Router();
const { getUserFormsController, addFormController } = require("../controllers/form.controller")

router.get("/getUserForms", getUserFormsController);
router.post("/addForm", addFormController);

module.exports = router;
