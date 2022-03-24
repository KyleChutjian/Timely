const mongoose = require("mongoose");
var express = require("express");
const app = express();
const users = require("./routes/users");

mongoose
  .connect(
    "mongodb+srv://fawaks15:Wizard51!@ecommerce.nfjwb.mongodb.net/Ecommerce?retryWrites=true&w=majority"
  )
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/users", users);
app.listen(5000, () => {
  console.log("Backend server is running!");
});
module.exports = app;
