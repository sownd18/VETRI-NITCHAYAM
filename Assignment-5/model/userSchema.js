const mongoose=require("mongoose");

const newSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongoose.model("USER",newSchema)