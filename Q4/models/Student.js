require('../config/db');
const mongoose = require("mongoose");
const StudentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sem:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    img:String,
    m1:{
        type:Number,
        required:true
    },
    m2:{
        type:Number,
        required:true
    },
    m3:{
        type:Number,
        required:true
    },
    per:{
        type:Number
    }
})

const Student =new mongoose.model("Student",StudentSchema)
module.exports= Student
