const mongoose=require("mongoose")


const BlogSchema=new mongoose.Schema({
    author:{type:String,required:true},
    title:String,
    createAt:Date,
    content:String,
    tags:[String]
})

const Blog=mongoose.model("blog",BlogSchema)

async function main(){
    const conn=await mongoose.connect("mongodb://localhost:27017/website");
    console.log("connected")

    const blog = new Blog({
        author:"Chaithanya Reddy",
        title:"leab mongo",
        createAt:new Date(),
        content: "backend is very important",
        tags:["tech", "mongodb"]
    })


    await blog.save()

    conn.disconnect()
}
main()