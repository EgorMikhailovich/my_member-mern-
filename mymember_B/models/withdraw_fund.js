const mongoose = require("mongoose");
var schema = mongoose.Schema;
var withdrawSchema = new schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true
        },
        description:{
            type:String,
        },
        status:{
            type:String,
            default:'unpaid'
        }

    }, 
    { timestamps:true} 
);

module.exports = mongoose.model("withdraw", withdrawSchema);
