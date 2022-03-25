const mongoose = require("mongoose");
var express = require("express");
const app = express();
const users = require("./routes/user");
const courses = require("./routes/courses");
const lessondata = require("./routes/lessondata");
const lessons = require("./routes/lessons");
mongoose
  .connect(
    "mongodb+srv://fawaks15:Wizard51!@ecommerce.nfjwb.mongodb.net/Ecommerce?retryWrites=true&w=majority"
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
app.listen(5000, () => {
  console.log("Backend server is running!");
});
module.exports = app;
