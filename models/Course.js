const mongoose = require("mongoose");
const Entry = require("../models/Entry.js");

const courseSchema = new mongoose.Schema({
  course_id: {type: Number, required: true},
  name: { type: String, required: true },
  numStudents: { type: Number, required: true },
  numLessons: { type: Number, required: true },
  courseCode: { type: String, required: true },
  facultyEmail: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users"},
  entry: {type: [mongoose.Schema], required: true, ref: "Entry"}
});

module.exports = mongoose.model("Course", courseSchema);


/*

Old
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  numStudents: { type: Number, required: true },
  numLessons: { type: Number, required: true },
  courseCode: { type: String, required: true },
});

*/