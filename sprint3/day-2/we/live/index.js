const http=require('http')
const fs=require("fs")


const server=http.createServer((req,res)=>{
   console.log(req.headers);
    // res.write("Hi ")
    // res.write(" to Masai")
    // res.end("!")
    res.setHeader("contet-type","application/json")
    if(req.url==="/"){
        return res.end("Welcome to Welcome!")
    }
    if(req.url==="/products"){
        res.setHeader("content-type", "application/json")
        return res.end(JSON.stringify([1,2,3,4]))
    }
    if(req.url==="/html"){
        let data=fs.readFile("./index.html",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.setHeader("content-type","text/html")
                res.end(data)
            }
        })
        
    }
    if(req.url==="/stream"){
        const readStream=fs.createReadStream('./tsxt.txt')
        readStream.pipe(res)
        // ?stream= countinous chunks data
    }
    
})

server.listen(8080,()=>{
    console.log("server started");
})



