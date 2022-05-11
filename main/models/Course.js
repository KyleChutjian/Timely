const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  lessonId: {type: Number, required: true},
  projectId: {type: Number, required: true},
  homeworkId: {type: Number, required: true},
  studyId: {type: Number, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users"},
});

const courseSchema = new mongoose.Schema({
  courseId: {type: Number, required: true},
  name: { type: String, required: true },
  numStudents: { type: Number, required: true },
  numLessons: { type: Number, required: true },
  courseCode: { type: String, required: true },
  facultyId: {type: mongoose.Schema.Types.ObjectId, required: false, ref: "Users"},
  entry: {type: [entrySchema], required: false, ref: "Entry"}
});

module.exports = {
  "Entry": mongoose.model("Entry", entrySchema),
  "Course": mongoose.model("Course", courseSchema)
}