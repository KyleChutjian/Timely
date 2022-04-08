const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  lessonId: {type: Number, required: true},
  projectId: {type: Number, required: true},
  homeworkId: {type: Number, required: true},
  studyId: {type: Number, required: true},
  courseCode: {type: Number, required: true},
  userEmail: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users"},
});

module.exports = mongoose.model("Entry", entrySchema);



/*
Old:
const lessonDataSchema = new mongoose.Schema({
  lessonId: { type: Number, required: true },
  Students: { type: String, required: true },
});

module.exports = mongoose.model("LessonData", lessonDataSchema);



 */
