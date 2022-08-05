const router = require("express").Router();
const formsRouter = require("./form.api");
const userRouter = require("./user.api");
const responseRouter = require("./response.api");

router.use("/form", formsRouter);
router.use("/response", responseRouter);
router.use("/user", userRouter);

module.exports = router;
