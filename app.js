var mongoose = require("mongoose");
var express = require("express");
var app = express();
var users = require("./routes/user");
var courses = require("./routes/courses");
var lessondata = require("./routes/lessondata");
var lessons = require("./routes/lessons");
mongoose
  .connect(
    "mongodb+srv://fawaks15:Wizard51!@ecommerce.nfjwb.mongodb.net/TimelyApp?retryWrites=true&w=majority"
  )
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/user", users);
app.use("/courses", courses);
app.use("/lessondata", lessondata);
app.use("/lessons", lessons);
app.listen(5001, () => {
  console.log("Backend server is running!");
});
module.exports = app;
