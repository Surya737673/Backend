const express= require("express")
const {Movie,connection}=require('./db')

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/movies",async(req,res)=>{
    const {pageNo,perPage}=req.params
    const LIMIT=2
    const movies=await Movie.find()//.skip(pageNo*2).limit(perPage)
    return res.json(movies)
})

// app.get("/movies/:title",async(req,res)=>{
//     const {title}=req.params
//     const movies=await Movie.find()
//     movies.filter
// })


app.post("/movies",(req,res)=>{
    const movie=new Movie({...req.body})
// inserMany
    movie.save((err,movie)=>{
        // disc
    })
})



app.listen(8080, async()=>{
    try{
        await connection
        console.log("Connected to db");
    }catch{
        console.log("failed to connect to db");
    }
})