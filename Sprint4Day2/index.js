const {Movie, connection} = require('./index')
const express= require("express");

const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/movie",async (req,res)=>{
  const MoviesData=await Movie.insertMany([req.body]);
  res.send()
               
})
app.get("/movie", async (req,res)=>{
  const MoviesData=await Movie.find();
  res.send()
               
})

app.listen(8080, async ()=>{
    await connection;
    console.log(" server started ")
})