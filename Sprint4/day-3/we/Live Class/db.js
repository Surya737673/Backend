const mongoose=require("mongoose");
const {Schema,model}=require("mongoose")
const connection=mongoose.connect("mongodb://localhost:27017/IMDB");

const movieSchema= new Schema({
    title:{type:String, required:true},
    rating:Number,
    releaseDate:Date,
    earning:{type:Number, default:"1000", min:0, max:10000},
    cast:{type:[String]},
    language:{
        type:String,
        enum:["English", "Hindi"]
    }
})

const Movie=model("movie",movieSchema)
module.exports={Movie,connection}