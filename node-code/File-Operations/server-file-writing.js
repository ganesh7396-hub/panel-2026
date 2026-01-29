const fs  =require("fs");
const data="this is shivaganesh "
const writestream= fs.createWriteStream("output.txt",{encoding:'utf8'});

writestream.write(data);
writestream.end()
