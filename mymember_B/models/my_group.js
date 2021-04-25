const mongoose = require("mongoose");
const schema = mongoose.Schema
const myGroupSchema = new schema(
    {
        student_type:{
            type:String,
            required:true
        },
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        relationship:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
);
module.exports = mongoose.model("myGroup", myGroupSchema);
