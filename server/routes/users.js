const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CoursesEntry = require("../models/Course");
const UserCourse1 = require("../models/UserCourse");
const Course = CoursesEntry.Course;
const Entry = CoursesEntry.Entry;
const UserCourse = UserCourse1.UserCourse;

const Axios = require("axios");

// Get All Users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new user

router.post("/", async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Update a User by Id
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a User by Id
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all Courses
router.get("/courses", async (req, res) => {
    try {
        const course = await Course.find();
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a Course
router.post("/courses/:facultyId", async (req, res) => {
    const newCourse = new Course(req.body);
    const facultyUser = await User.findById(req.params.facultyId);
    newCourse.facultyId = facultyUser._id;

    try {
        const savedCourse = await newCourse.save();
        const newUserCourse = new UserCourse({
            "userId": facultyUser._id,
            "courseId": savedCourse._id
        });
        const savedUserCourse = await newUserCourse.save();
        res.status(200).json(savedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a Course
router.put("/courses/:courseId", async(req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.courseId, {$set: req.body}, {new:true});
        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a Course
router.delete("/courses/:courseId", async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.courseId);
        res.status(200).json("Course has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all Entries
router.get("/entry", async(req, res) => {
    try {
        const entry = await Entry.find();
        res.status(200).json(entry);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get all UserCourse Entries
router.get("/testing", async (req,res) => {
    const userCourses = await UserCourse.find({});
    res.status(200).json(userCourses);
})

// Delete UserCourse by CourseId
router.delete("/testing/:userCourseId", async(req, res) => {
    try {
        await UserCourse.findByIdAndDelete(req.params.userCourseId);
        res.status(200).json("UserCourse has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get all Enrolled Courses by User
router.get("/enroll/:userId", async (req, res) => {
    const courses = [];
    const userCoursesFilter = {userId: req.params.userId};
    const userCourses = await UserCourse.find(userCoursesFilter, {courseId: 1, _id: 0}).then((course) => {
        course.forEach((specificCourse) => {
            courses.push(specificCourse.courseId);
        });
        Course.find({_id: {$in: courses}}, {name: 1, _id: 0}).then((result) => {
            res.send(result);
        });
    });
});

// Enroll in a Course
router.post("/enroll/:userId/:courseId", async (req, res) => {
    const user = await User.findById(req.params.userId);
    // const newEntry = new Entry(req.body);
    // newEntry.userEmail = user.email;
    const newUserCourse = await new UserCourse({
        userId: req.params.userId,
        courseId: req.params.courseId,
    }).save();
    res.send(newUserCourse);
})



module.exports = router;