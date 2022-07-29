const mongoose = require("mongoose")

const Schema = mongoose.Schema

const FormSchema = new Schema({
    ownerId: {
        type: String,
        required: true
    },
    inputFields: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Number,
        required: true
    },
    deadline: {
        type: Number,
        required: true
    }

})

const Form = mongoose.model("form", FormSchema)

module.exports = FormSchema