const mongoose = require("mongoose");
const schema = mongoose.Schema

const tempListSchema = new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact_type:{
        type:String,
        default:" "
    },
    userId:{
        type:String
    }
})

module.exports = mongoose.model("std_temp_list", tempListSchema);

