const router = require("express").Router();
const {
  getUserFormsController,
  addFormController,
  getOneFormById,
  deletFormById,
} = require("../controllers/form.controller");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

router.get("/getUserForms", authenticationMiddleware, getUserFormsController);
router.post("/addForm", authenticationMiddleware, addFormController);
router.get("/getFormById/:formId", getOneFormById);
router.delete(
  "/deleteFormById/:formId",
  authenticationMiddleware,
  deletFormById
);

module.exports = router;
