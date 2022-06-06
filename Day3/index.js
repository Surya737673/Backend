const express=require("express")
const app=express()
const fs=require("fs")


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        res.send(data)
    })
})

app.post("/",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
      const mainData=JSON.parse(data)
    //   req.send(mainData)
      mainData.data=[...mainData.data,req.body]
      fs.writeFile("./db.json",JSON.stringify(mainData),{encoding:"utf-8"},(err,data)=>{
        res.status(201).send("data accpeted")
      })
    
    })
})


app.put("/:id",(req,res)=>{
    const {id} =req.params
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
    const mainData=JSON.parse(data)
    mainData.data=mainData.data.map((e)=>{
        if(e.id==id){
            return req.body
        }
            return e
    })
    fs.writeFile("./db.json",JSON.stringify(mainData),{encoding:"utf-8"},(err,data)=>{
       res.end("data updated")
    })
  })
})

app.delete("/:id",(req,res)=>{
    const {id} =req.params
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
    const mainData=JSON.parse(data)
    mainData.data=mainData.data.filter((e)=>e.id!=id)
    fs.writeFile("./db.json",JSON.stringify(mainData),{encoding:"utf-8"},(err,data)=>{
       res.end("data deleted")
    })
  })
})

app.listen(8080,()=>{
    console.log("server started")
})