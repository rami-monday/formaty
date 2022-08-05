const router = require("express").Router();
const { getUserresponsController, addresponsController } = require("../controllers/form.controller")

router.get("/getUserRespons", getResponsdController);
router.post("/addRespons", addResponsController);

module.exports = router;