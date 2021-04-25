const mongoose = require("mongoose");
const schema = mongoose.Schema

const textListSchema = new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contact_type:{
        type:String,
        default:""
    },
    primaryPhone:{
        type:String
    },
    userId:{
        type:String
    }
})

module.exports = mongoose.model("std_text_list", textListSchema);

