const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  numStudents: { type: Number, required: true },
  numLessons: { type: Number, required: true },
  courseCode: { type: String, required: true },
});

module.exports = mongoose.model("Course", courseSchema);
