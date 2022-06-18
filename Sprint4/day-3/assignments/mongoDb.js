const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb://localhost:27017/AssignmentDay3")

const movieSchema=new mongoose.Schema({
    title:String,
    cast:{type:[String]},
    releaseDate:String,
    rating:Number,
    language:String
})

const Movie=new mongoose.model("movie",movieSchema)
module.exports={Movie,connection}