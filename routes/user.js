var express = require("express");
var router = express.Router();
var User = require('../models/User');
var Course = require('../models/Course');


/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send("User GET");
  // Get list of all their courses

  // Req.params.body includes the userId
  
  
  const getUserCourses = await User.findById(req.params.body).courses;

  console.log(getUserCourses);

});

// Adding a Course
router.put("/:", async (req, res, next) => {
  console.log("User PUT");

  const newCourse = await Course.create(req.params.body);
  const getUser = await User.findById(req.params)


});

module.exports = router;