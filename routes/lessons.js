const express = require("express");
const router = express.Router();
const Lesson = require("../models/UserCourse");

//Get All Lessons
router.get("/", async (req, res) => {
  try {
    const lesson = await Lesson.find();
    res.status(200).json(lesson);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add Lesson
router.post("/", async (req, res) => {
  const newLesson = new Lesson(req.body);

  try {
    const savedLesson = await newLesson.save();
    res.status(200).json(savedLesson);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Lesson
router.put("/:id", async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLesson);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Lesson
router.delete("/:id", async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.status(200).json("Lesson has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
