const router = require("express").Router();
var User = require("../models/User");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "secret1"
const cookieparser= require("cookie-parser")
const authTokens = {};
router.use(cookieparser())
router.get("/register",(req,res)=>{
    res.render("register");
});
router.post("/register",async(req,res)=>{
    const {email,password}= req.body;
    try{
        const user1=await User.findOne({email:email})
        if(user1)
        {
            res.status(201).send("User Already Exists")
        }
        const hashpassword = await bcyrpt.hash(password,10);

        const result = await User.create({
            email:email,
            password:hashpassword
        })
        const token = jwt.sign({email:result.email,id:result._id},secret);
       // res.status(400).json({user:result,token:token});
        res.redirect("/");
    }
    catch(Error){
        console.log(Error);
    }

})
router.get("/",(req,res)=>{
    res.render("login");
})   
router.post("/",async (req,res)=>{
    const {email,password}= req.body;
    try
    {
        const user1= await User.findOne({email:email})
        if(!user1){
            return res.status(400).send("User Not Found");
        }
        const matchPassword = await bcyrpt.compare(password,user1.password);
        if(!matchPassword){
            return res.status(404).json({msg:"Invalid Creditials"})
        }
        const token = jwt.sign({email:user1.email,id:user1._id},secret);
        authTokens[token]=token;
        res.cookie('AuthToken', authTokens,1);
       // res.json({user:existUser,token:token});
       res.redirect("/list")

    }catch(err){
        console.log(err)
    }
})   

router.get("/logout",(req,res)=>{
    res.clearCookie('AuthToken')
    res.redirect('/')
}) 

module.exports= router