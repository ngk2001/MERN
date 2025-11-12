const mongoose =require("mongoose");

const schema = new mongoose.schema({
    
        name:{
            type:String,
            require:true
        },
        age:
        {
            type:Number,
            require:true
        }
}    )
    


module.exports = mongoose.model("DATA", schema)