const mongoose =require("mongoose");

const schema = new mongoose.Schema({

       idNum:{
        type:Number,
        required:true,
        unique:true
       },
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        }

})
    


module.exports = mongoose.model("user", schema)