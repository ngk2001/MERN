const http = require("http");

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {"content-type":"text/plain"})
//     res.end("welcome to the webite")
// })

// server.listen(3000,()=>{
//     console.log("server running");
// })

const server = http.createServer((req, res) =>{
    if(req.url ==="/home"){
    res.writeHead(200, {"content-type":"text/plain"})
    res.end("its daddys home")

    }else if(req.url==="/about"){
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Its about");
    }else{
        res.writeHead(404, {"content-type":"text/plain"})
        res.end("errror")
    }
})

server.listen(3000,()=>{
    console.log("server started...")
})