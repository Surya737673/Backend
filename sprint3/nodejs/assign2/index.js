const file=require("fs")
const fs=require("fs")
const path=require("path")
const data=file.readFileSync("./test.txt",{encoding:'utf-8'},(err,data)=>{
    if(e){
        console.log(error)
    }
    else{
        console.log(data)
    }
})
console.log("data",data)


file.appendFileSync("./test.txt","upcoming")
file.unlinkSync("./test.txt")
file.writeFileSync("test.txt","Action needed dghhg")
file.renameSync("test.txt","new.txt")
const directory=path.join(__dirname,"../")

fs.readdir(directory,function(err,d){
    if(err){
        return console.log("unable to scan directory"+err)
    }
    d.map((el)=>{
        console.log(el)
    })
})

