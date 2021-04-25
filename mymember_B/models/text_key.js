const mongoose = require("mongoose");
const schema = mongoose.Schema

const textkeySchema = new schema({
    ACCOUNT_SID:{
        type:String,
        required:true
    },
    AUTH_TOKEN:{
        type:String,
        required:true
    },
    MSG_SERVICE_SID:{
        type:String,
        required:true
    },
    twillo_no:{
        type:String,
        required:true
    },
    userId:{
        type:String
    }
})

module.exports = mongoose.model("text_auth_key", textkeySchema);

