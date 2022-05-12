require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
const jwt = require('jsonwebtoken');

const cors = require("cors");

var users = require("./routes/users");
var auth = require("./routes/auth")
const bcrypt = require('bcrypt');

//middlewares

app.use(express.json());
app.use(cors());





mongoose.connect("mongodb+srv://fawaks15:Wizard51!@ecommerce.nfjwb.mongodb.net/TimelyApp?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
}
);
app.use("/user",users);
app.use("/auth",auth);


    

app.listen(5001, ()=>{
    console.log('server running on port 5001...');
});
