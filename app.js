var mongoose = require("mongoose");
var express = require("express");
var app = express();
const user = require("./routes/users.js");
mongoose
  .connect(
    "mongodb+srv://fawaks15:Wizard51!@ecommerce.nfjwb.mongodb.net/TimelyApp?retryWrites=true&w=majority"
  )
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/user', user);
app.listen(5001, () => {
  console.log("Backend server is running!");
});
module.exports = app;
