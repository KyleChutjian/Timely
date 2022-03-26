const mongoose = require("mongoose");

const lessonDataSchema = new mongoose.Schema({
  lessonId: { type: Number, required: true },
  Students: { type: String, required: true },
});

module.exports = mongoose.model("LessonData", lessonDataSchema);
