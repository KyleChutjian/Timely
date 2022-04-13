const mongoose = require("mongoose");

const userCourseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users"},
  courseId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Course"},
});

module.exports = {
  "UserCourse": mongoose.model("UserCourse", userCourseSchema),
}
