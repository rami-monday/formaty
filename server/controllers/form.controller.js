const Form = require("../models/form.model");

const getUserFormsController = async function(req, res) {
    try {
        const { userId } = req.params;
        const usersFormsFromDb = await Form.find({ ownerId: userId });
        res.send(usersFormsFromDb);
    } catch (error) {
        res.sendStatus(500);
    }
};

const getOneFormById = async function(req, res) {
    const { formId } = req.params;
    try {
        const form = await Form.findById(formId);
        res.send(form);
    } catch (error) {
        res.sendStatus(500);
    }
};

const addFormController = async function(req, res) {
    const newForm = req.body;
    newForm.dateCreated = Date.now();
    newForm.status = "active";

    const formDb = new Form(newForm);
    try {
        const dbResponse = await formDb.save();
        res.send(dbResponse);
    } catch (error) {
        res.sendStatus(500);
    }
};

const deletFormById = async function(req, res) {
    const { formId } = req.params;
    try {
        const deletedForm = await Form.findByIdAndDelete(formId);
        res.send(deletedForm);
    } catch (error) {
        res.statusCode(500);
    }
}

module.exports = { deletFormById, getUserFormsController, addFormController, getOneFormById };