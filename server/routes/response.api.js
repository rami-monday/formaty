const router = require("express").Router();
const { getResponseController, addResponseController  } = require("../controllers/form.controller")

router.post("/getFormResponses", getResponseController);
router.post("/addResponse", addResponseController);

module.exports = router;