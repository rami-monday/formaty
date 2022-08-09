const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResponseSchema = new Schema({
  formId: String,
  inputValues: Array,
});
const Response = mongoose.model("response", ResponseSchema);
module.exports = Response;