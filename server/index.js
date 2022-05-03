const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
var users = require("./routes/users")
const User = require("./models/User");
const CoursesEntry = require("./models/Course");
const UserCourse1 = require("./models/UserCourse");

//middlewares
app.use(express.json());

mongoose.connect("mongodb+srv://fawaks15:Wizard51!@ecommerce.nfjwb.mongodb.net/TimelyApp?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
}
);
app.use("/",users);


// app.get("/", async(req,res)=>{
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });




app.listen(5001, ()=>{
    console.log('server running on port 5001...');
});
