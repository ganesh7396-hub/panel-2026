const { exec } = require('child_process');


const command =process.platform === "win32" ? "dir":"ls";
 exec(command,(error,stderr,stdout)=>{
    if(error){
        console.log(error)
    }
    if(stderr){
        console.log(stderr)
    }
    console.log("output",stdout)
 });