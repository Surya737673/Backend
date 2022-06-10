
const mongoose = require("mongoose");
const {Schema,model} =require("mongoose")
const connection = mongoose.connect("mongodb://localhost:27017/AssignmentDay2");

const MovieSchema = new mongoose.Schema({
    Title:String,
    ImageUrl:String,
    cast:[String],
    Rating:Number,
})
  
  const Movie= mongoose.model("movie",MovieSchema);
  module.exports = {Movie,connection}

