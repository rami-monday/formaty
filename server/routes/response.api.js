const router = require("express").Router();
const {
  getResponseController,
  addResponseController,
} = require("../controllers/response.controller");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

router.post(
  "/getFormResponses",
  authenticationMiddleware,
  getResponseController
);
router.post("/addResponse", addResponseController);

module.exports = router;
