const Form = require("../models/form.model");


const getUserFormsController = async function(req, res) {
    try {
        const { userId } = req.body
        const usersFormsFromDb = await Form.find({ ownerId: userId })
        res.send(usersFormsFromDb)
    } catch (error) {
        res.sendStatus(500)
    }
};

const getOneFormById = async function(req, res) {
    const { formId } = req.body
    try {
        const form = await Form.findById(formId)
        res.send(form)
    } catch (error) {
        res.sendStatus(500)
    }
}

const addFormController = async function(req, res) {
    const newForm = req.body
    const formDb = new Form(newForm)
    try {
        const dbResponse = await formDb.save()
        res.send(dbResponse)
    } catch (error) {
        res.sendStatus(500)
    }
};

module.exports = { getUserFormsController, addFormController, getOneFormById };