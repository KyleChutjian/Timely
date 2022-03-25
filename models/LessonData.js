const mongoose = require('mongoose');

const lessonDataSchema = new mongoose.Schema({
    lessonId: {type: Number, required: true},
    Students: {type: [User], required: true}
});

module.exports = mongoose.model('LessonDataModel', lessonDataSchema);