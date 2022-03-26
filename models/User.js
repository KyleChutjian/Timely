const mongoose = require("mongoose");
const Course = require("./Course");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isProfessor: { type: Boolean, required: true },
});

module.exports = mongoose.model("Users", userSchema);
