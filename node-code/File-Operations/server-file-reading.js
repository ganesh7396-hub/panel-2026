
const fs =require('fs')
const readStream=fs.createReadStream("input.txt",{encoding:'utf8'
})
let filedata="";

readStream.on("data",(chunk)=>{
    filedata +=chunk;
    console.log(filedata)
});

readStream.on("end",()=>{
    console.log(filedata)
})

readStream.on("error",(error)=>{
    console.log(error)
})