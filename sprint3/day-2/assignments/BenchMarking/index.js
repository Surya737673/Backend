const http=require('http')
const fs=require("fs")




const server=http.createServer((req,res)=>{
    
    if(req.url=="/textsync"){
        let data=fs.readFileSync("./data.txt",{encoding:"utf-8"})
        res.end(data)
    }
    if(req.url==="/textasync"){
        fs.readFile("./data.txt",{encoding:"utf-8"},(e,d)=>{

            if(e){
                console.log(e);
            }
            else{
                res.end((d) )
            }
        })
    }
    if(req.url==="/textstream"){

        const readStream=fs.createReadStream('./data.txt')
        readStream.pipe(res)
    }
    if(req.url=="/textpromise"){
        fs.promises.readFile("./data.txt",{encoding:"utf-8"},(e,d)=>{})

        .then((data)=>{
            res.end(data)
        })
    }
    
})


server.listen(8080,()=>{
    console.log("server started");
})
