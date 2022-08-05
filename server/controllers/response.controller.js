const Form = require("../models/form.model");
const Response = require("../models/response.model")



const getResponseController = async function (req, res) {
  try {
        const { userId, formId } = req
    const form = await Form.findById(formId)
    if (form.ownerId === userId) {
        const response = await Response.findOne({formId})
        res.send(response)
    }
  } catch (error) {
      res.sendStatus(500)
  }
};



const addResponseController = async function (req, res) {
    const response = new Response (req.body)
    const dbRes = await response.save()
    res.send(dbRes)
};

module.exports = { getResponseController, addResponseController };
