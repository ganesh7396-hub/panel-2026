const express = require('express');
const cors =require('cors');
const rateLimiter =require('express-rate-limit');
const user =require("./routes/user.route")
const dbconnect =require("./DB/databaseConnect")
const app =express();
//parse json
app.use(express.json())
//urlencode json
app.use(express.urlencoded({extended:true}))

dbconnect()

//cors impmention
const corsOptions={
    origin:"https://bijbol.com",
    methods:["GET","POST","PUT","PATCH","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}
app.use(cors(corsOptions))



const ratelimiters= {
    windowMs:1*60*1000,
    max:10,
    message:"Too Many request please try again laterss"

}
//ratelimitter
// app.use(rateLimiter(ratelimiters))

app.use("/user",user)
//use middleware
const authenticate =(req,res,next)=>{
    let token =req.headers["token"];
    if(!token){
        res.status(401).json({"message":"unaurthoirzed User"})
    }else{
         next()
    }
   
}


app.get("/",(req,res)=>{
    res.send("app is running ")
})

app.listen(3000,()=>{console.log("server running on 3000")});