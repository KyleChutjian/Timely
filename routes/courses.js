var express = require("express");
var router = express.Router();
var Courses = require("../models/Course");

//Get All Coursess
router.get("/", async (req, res) => {
  try {
    const course = await Courses.find();
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add Courses
router.post("/", async (req, res) => {
  const newCourses = new Courses(req.body);

  try {
    const savedCourses = await newCourses.save();
    res.status(200).json(savedCourses);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Courses
router.put("/:id", async (req, res) => {
  try {
    const updatedCourses = await Courses.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCourses);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Courses
router.delete("/:id", async (req, res) => {
  try {
    await Courses.findByIdAndDelete(req.params.id);
    res.status(200).json("Courses has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
