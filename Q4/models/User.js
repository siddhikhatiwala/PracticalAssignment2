require('../config/db');
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    }  
})
const User = new mongoose.model("User",UserSchema)
module.exports= User;





