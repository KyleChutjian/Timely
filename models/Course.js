const mongoose = require("mongoose");
const Entry = require("../models/Entry.js");

var entrySchema = new mongoose.Schema({
  lessonId: {type: Number, required: true},
  projectId: {type: Number, required: true},
  homeworkId: {type: Number, required: true},
  studyId: {type: Number, required: true},
  courseCode: {type: Number, required: true},
  userEmail: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users"},
});


const courseSchema = new mongoose.Schema({
  course_id: {type: Number, required: true},
  name: { type: String, required: true },
  numStudents: { type: Number, required: true },
  numLessons: { type: Number, required: true },
  courseCode: { type: String, required: true },
  facultyEmail: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users"},
  entry: {type: [entrySchema], required: true, ref: "Entry"}
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