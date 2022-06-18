const http=require('http')
const fs=require("fs")
const path = require('path')
const directionaryPath=path.join(__dirname,"./")
const directionaryPath2=path.join(__dirname,"./Public")
const directionaryPath3=path.join(__dirname,"./Public/Others")


const server=http.createServer((req,res)=>{
   
    if(req.url==="/"){
        fs.readdir(directionaryPath,(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.setHeader("content-type", "text/html")
                data.map((item)=>{
                    res.write(`<ul>
                    <li><a href=/${item}>${item}</a></li>
                    </ul>`)
                })
                res.end()
            }
        })
    }
    if(req.url==="/Public"){
        fs.readdir(directionaryPath2,(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.setHeader("content-type", "text/html")
                data.map((item)=>{
                    res.write(`<ul>
                    <li><a href=http://localhost:8080/Public/Others>${item}</a></li>
                    </ul>`)
                })
                res.end()
                // res.end(JSON.stringify(data))
            }
        })
    }

    if(req.url==="/Public/Others"){
        fs.readdir(directionaryPath3,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                res.end(JSON.stringify(data))
            }
        })
    }
    
    
})

server.listen(8080,()=>{
    console.log("server started");
})

