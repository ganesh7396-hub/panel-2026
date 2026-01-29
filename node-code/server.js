const http =require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plan'})
    res.end('Hello world');
})

server.listen(3000,()=>{
    console.log("server running on port 3000")
})