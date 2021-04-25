const mongoose = require("mongoose");
const schema = mongoose.Schema

const changeRankSchema = new schema({
    current_rank_id:{
        type:String,
        default:""
    },
    current_rank_name:{
        type:String,
        default:""
    },
    current_rank_img:{
        type:String,
        default:""
    },
    next_rank_id:{
        type:String,
        default:""
    },
    next_rank_name:{
        type:String,
        default:""
    },
    next_rank_img:{
        type:String,
        default:""
    },
    stdId:{
        type:String
    },
    programID:{
        type:String
    },
    userId:{
        type:String
    } 
})

module.exports = mongoose.model("manage_change_rank", changeRankSchema);

