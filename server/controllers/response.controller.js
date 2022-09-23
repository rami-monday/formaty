const Form = require("../models/form.model");
const Response = require("../models/response.model");
//this function is not working, because the if has a problem
const getResponseController = async function (req, res) {
  const { formId } = req.body;
  const userId = req.user._id;
  try {
    const form = await Form.findById(formId);
    if (form.ownerId === userId) {
      const response = await Response.find({ formId: formId });
      res.send(response);
    } else {
      res.send("You are not authorized to see the responses to this form.");
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const addResponseController = async function (req, res) {
  const response = new Response(req.body);
  response.inputValues.timestamp = Date.now();
  const dbRes = await response.save();
  res.send(dbRes);
};

module.exports = { getResponseController, addResponseController };
