const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  lessonId: { type: Number, required: true },
  name: { type: String, required: true },
  courseCode: { type: Number, required: true },
});

module.exports = mongoose.model("Lesson", LessonSchema);
