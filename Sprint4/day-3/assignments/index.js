const {Movie,connection}=require("./mongoDb")
const express=require("express")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


// get Data and Filter Data
app.get("/",async(req,res)=>{
    // const {q}=req.query
    const params=req.query
    // if(q){
    //     const data=await Movie.find({})
    //     res.send("hi")
    // }
    if(params){
        const movies=await Movie.find(params)
        return res.json(movies)
    }
    
    const movies=await Movie.find()
    return res.json(movies)
})


app.get("/movies",async(req,res)=>{
    const q = req.query
    if(q){
        const Data= await Movie.find({title:{'$rogex':q,'options':'i'}},{})
        return res.json(Data)
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
    // const movies=await Movie.findById(id)

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

// sorting by respected field
// app.get("/movies1/:sort",async(req,res)=>{
//     const {sort}=req.params
//     const movies=await Movie.find().sort(`${sort}:1`)
//     res.send("ur Data is Sorted")
// })

app.listen(8080, async()=>{
    try{
        await connection
        console.log("Connected to db");
    }catch{
        console.log("failed to connect to db");
    }
})