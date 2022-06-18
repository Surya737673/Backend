const {Movie,connection}=require("./db")
const express=require("express")
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/",async(req,res)=>{
    const params=req.query
    if(params){
        const movies=await Movie.find(params)
        return res.json(movies)
    }
    const movies=await Movie.find()
    return res.json(movies)
})


// post Data
app.post("/movies",async(req,res)=>{
    await Movie.insertMany([req.body])
    res.send("Data has been Posted")
})




app.patch("/movies/:id",async(req,res)=>{
    const {id}=req.params
    let updateObject =req.body
    let movies=await Movie.updateMany({_id :id},{$set: updateObject});
    return res.json(movies)
})

// delete data
app.delete("/movies/:id",async(req,res)=>{
    const {id}=req.params
    await Movie.deleteMany({_id:id})
    res.send(`document deleted successfully-->id-->${id}`)
})

app.post("/movies",async (req,res)=>{
  const q=req.query;
  const data=await Movie.find({"title":{"$rogex":q,'options':'i'}},{})
})

app.listen(8080, async()=>{
    try{
        await connection
        console.log("Connected to db");
    }catch{
        console.log("failed to connect to db");
    }
})