const router = require("express").Router();
const { getResponseController, addResponseController } = require("../controllers/response.controller")

router.post("/getFormResponses", getResponseController);
router.post("/addResponse", addResponseController);

module.exports = router;