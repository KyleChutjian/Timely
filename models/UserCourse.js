const mongoose = require("mongoose");

const userCourseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users"},
  courseId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Course"},
});

module.exports = mongoose.model("UserCourse", userCourseSchema);


/*

Old:
const LessonSchema = new mongoose.Schema({
  lessonId: { type: Number, required: true },
  name: { type: String, required: true },
  courseCode: { type: Number, required: true },
});

module.exports = mongoose.model("Lesson", LessonSchema);


*/