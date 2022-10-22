const jwt=require("jsonwebtoken")
const secret="secret-key"
const exptime=3000;
const sign=(req,res)=>{
    const token=jwt.sign({username: "user1",role:"admin"},secret,{algorithm:"HS256",expiresIn:exptime})
    res.send(token)
}

const verify=(req,res,next)=>{
    var token=req.headers.authorization;
    //req.get("authorization")
    if(!token)
        return res.status(401).end("Not authorised")
    try{
        token=token.split(" ")[1]
        var payload=jwt.verify(token,secret)
        console.log(payload)
        next()
    }catch(e)
    {
        return res.status(401).end("Not authorised")
    }
}

module.exports={sign,verify}