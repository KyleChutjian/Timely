const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    lessonId: {type: Number, required: true},
    name: {type: String, required: true},
    courseCode: {type: Number, required: true}
});

module.exports = mongoose.model('LessonModel', lessonSchema);