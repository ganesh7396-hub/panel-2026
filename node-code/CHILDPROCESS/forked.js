const fork =require("child_process")
const forked = fork("script.js");

forked.send("message")
forked.on("message",(message)=>{
    console.log(message);

})
process.send("message")
process.on("message",(message)=>{
    console.log(message)
})