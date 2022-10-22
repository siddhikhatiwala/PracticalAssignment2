const mongoose=require("../config/db")
var StudentSchema=mongoose.Schema({
    name: String,
    email: String,
    sem: Number,
    age: Number
});

var Book=mongoose.model('Student',StudentSchema)
module.exports=Book;