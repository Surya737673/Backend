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
const main=async()=>{
    const conn= await connection;
    console.log("Connected")

    // const movie= new Movie({
    //     title:"Aadipurush",
    //     rating:9.0,
    //     releaseDate:new Date(),
    //     earning:9000,
    //     cast:["Prabhas","Kriti sanan","Omrouth"],
    //     language:"Hindi"
    // })
    // await movie.save()


    // for inserting 
    // Movie.InsertOne()
    // Movie.insertMany([{},{},{}])


    // const movies=await Movie.find()
    // console.log("All Movies",movies);

    // const hindiMovies=await Movie.find({language:"Hindi"}).sort({title:1})
    // console.log("Hindi Movies",hindiMovies);

    // const hindiMovies=await Movie.find({rating:{$gt:8}}).sort({title:1})
    //  console.log("Hindi Movies",hindiMovies)

    const query=Movie.find()
    query.select("rating")
    query.exec()

    conn.disconnect()
}
main()