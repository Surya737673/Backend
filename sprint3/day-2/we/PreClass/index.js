const http=require('http')
const fs=require("fs")


const server=http.createServer((req,res)=>{
    let data=fs.readFileSync("./text.txt",{encoding:"utf-8"})
    // res.write("Hi ")
    // res.write(" to Masai")
    // res.end("!")
    if(req.url==="/"){
        return res.end("Welcome to Welcome!")
    }
    if(req.url==="/products"){
        res.setHeader("content-type", "application/json")
        return res.end(JSON.stringify([1,2,3,4]))
    }
    if(req.url==="/html"){
        
        return res.end(data)
    }
    
})

server.listen(8080,()=>{
    console.log("server started");
})

