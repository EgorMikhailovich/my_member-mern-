const mongoose = require("mongoose");
const schema = mongoose.Schema

const TestSchema = new schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    memberprofileImage:{
        type:String
    },
    date_of_exam:{
        type:String
    },
    studentBeltSize:{
        type:String
    },
    category:{
        type:String
    },
    program:{
        type:String
    },
    programId:{
        type:String
    },
    start_date:{
        type:String
    },
    date_paid:{
        type:String,
        default:""
    },
    amount:{
        type:String,
        default:""
    },
    method:{
        type:String,
        default:""
    },
    manage_change_rank:[{
        type:schema.Types.ObjectId,
        ref:'manage_change_rank'
    }],
    userId:{
        type:String
    }

})

module.exports = mongoose.model("test_info", TestSchema);

