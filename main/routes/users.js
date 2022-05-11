const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CoursesEntry = require("../models/Course");
const UserCourse1 = require("../models/UserCourse");
const Course = CoursesEntry.Course;
const Entry = CoursesEntry.Entry;
const UserCourse = UserCourse1.UserCourse;

// Get All Users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a User by Id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }
})

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
router.get("/courses/:courseId/entry", async(req, res) => {
    console.log(`Getting entries in the course with id ${req.params.courseId}`);
    try {
        const currentCourse = await Course.findById(req.params.courseId);
        console.log(currentCourse.name);
        const entries = currentCourse.entry;
        console.log(entries);
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Create an Entry
// router.post("/courses/:courseId/entry", async(req, res) => {
//     try {
//         const newEntry = new Entry(req.body);
//         const course = await Course.findById(req.params.courseId);
//         course.entry.push(newEntry);
//         const savedCourse = course.save();
//         res.status(200).json(savedCourse.entry);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// Update an Entry by Id
router.put("/courses/:courseId/entry/:entryId", async(req, res) => {
    console.log("------------------");
    try {
        const course = await Course.findById(req.params.courseId);
        let index = req.params.entryId;
        index--;
        console.log(index);
        console.log(course.entry[index]);
        course.entry[index].projectId = req.body.projectId;
        course.entry[index].homeworkId = req.body.homeworkId;
        course.entry[index].studyId = req.body.studyId;
        console.log(course.entry[index]);

        // console.log(course.entry[req.params.entryId]);
        // course.entry[req.params.entryId] = req.body;
        console.log(course.entry[req.params.entryId]);
        await course.save();
        res.status(200).json(`Lesson #${req.params.entryId} has been updated.`);


    } catch (err) {
        res.status(500).json(err);
    }
})


// Delete an Entry by Id

// Delete All Entries in a course
router.delete("/courses/:courseId/entry", async (req,res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        for (let i = course.entry.length-1; i >= 0; i--) {
            await course.entry[i].remove();
        }

        await course.save();
        res.status(200).json(`The entries in ${course.name} have been deleted.`);

    } catch (err) {
        res.status(500);
    }
});

// Get all UserCourse Entries
router.get("/userCourses", async (req,res) => {
    const userCourses = await UserCourse.find({});
    res.status(200).json(userCourses);
})

// Delete UserCourse by CourseId
router.delete("/userCourses/:userCourseId", async(req, res) => {
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
    const course = await Course.findById(req.params.courseId);
    // console.log(`UserId: ${req.params.userId}`);
    // console.log(`CourseId: ${req.params.courseId}`);
    for (let i = 1; i <= 40; i++) { // change to 40 later
        // console.log("Entry #" + i);
        const currentEntry = new Entry({
            lessonId: i,
            projectId: 0,
            homeworkId: 0,
            studyId: 0,
            userId: req.params.userId // user.email?
        });
        course.entry.push(currentEntry);
        
    }
    course.save();
    const newUserCourse = await new UserCourse({
        userId: req.params.userId,
        courseId: req.params.courseId,
    }).save();
    res.send(newUserCourse);
})



module.exports = router;