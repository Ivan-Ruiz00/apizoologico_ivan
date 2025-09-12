const mongoose=require("mongoose");
const animalSchema=mongoose.Schema({
    nombre:{
        typre:String,
        required:true,
    },
    edad:{
        type:Number,
        required:true,
    },
    tipo:{
        type:String,
        required:true,
    },
    fecha:{
        type:Date,
        required:true,
    }
});
module.exports=mongoose.model("Animal",animalSchema);