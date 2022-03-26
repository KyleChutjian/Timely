var express = require("express");
var router = express.Router();
var LessonData = require("../models/LessonData");
//Get All LessonDatas
router.get("/", async (req, res) => {
  try {
    const lessondata = await LessonData.find();
    res.status(200).json(lessondata);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add LessonData
router.post("/", async (req, res) => {
  const newLessonData = new LessonData(req.body);

  try {
    const savedLessonData = await newLessonData.save();
    res.status(200).json(savedLessonData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update LessonData
router.put("/:id", async (req, res) => {
  try {
    const updatedLessonData = await LessonData.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLessonData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete LessonData
router.delete("/:id", async (req, res) => {
  try {
    await LessonData.findByIdAndDelete(req.params.id);
    res.status(200).json("LessonData has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
