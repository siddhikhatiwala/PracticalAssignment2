const mongoose=require("mongoose")
mongoose.connect(process.env.DBURL)
var db=mongoose.connection;
db.on("error",(e)=>{console.log(e)})
module.exports=mongoose;