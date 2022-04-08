var express = require("express");
var router = express.Router();
var Entry = require("../models/Course");
//Get All LessonDatas
router.get("/", async (req, res) => {
  try {
    const entry = await Entry.find();
    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add LessonData
router.post("/", async (req, res) => {
  const newEntry = new Entry(req.body);

  try {
    const savedEntry = await newEntry.save();
    res.status(200).json(savedEntry);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update LessonData
router.put("/:id", async (req, res) => {
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEntry);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete LessonData
router.delete("/:id", async (req, res) => {
  try {
    await Entry.findByIdAndDelete(req.params.id);
    res.status(200).json("Entry has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
