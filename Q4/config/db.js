const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Student",{
    useNewUrlParser:true
}).then(() => {
    console.log("Succesful connection! ");
}).catch((err) => {
    console.log(err);
});