var express = require("express");
var router = express.Router();
var Course = require('../models/Course');

/* GET users listing. */
router.get("/",  async (req, res, next) => {
  res.send("Courses GET");
  // get all courses
  const allCourses = await Course.find({}); // queries all courses
  


})




module.exports = router;
