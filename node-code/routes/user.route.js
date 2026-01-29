const express = require("express");
const router = express.Router();
const User= require("../models/User.model")

router.post("/add",async(req,res)=>{

    const user =req.body;
    console.log("user",user)
    const userData =await User.create(user)
    console.log(userData)
    res.send({"user":userData})
})


router.get("/getUser",async(req,res)=>{

     const userData =await User.find({}).exec();
     res.send({data:userData})

})



router.post("/updateUser",async(req,res)=>{
    const reqs=req.body;
    const updateUser =await User.updateOne({_id:reqs._id},{$set:reqs})
    res.send({data:updateUser})

});


router.delete("/deleteUser/:userId",async(req,res)=>{
    const paramId=req.params.userId;
    console.log(paramId)
    const deleteUser = await User.deleteOne({_id:paramId}).exec();
    console.log(deleteUser)
    res.send({user:deleteUser})

})
module.exports=router;