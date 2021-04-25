const mongoose = require('mongoose');
const schema = mongoose.Schema;

const candidateSchema = new schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    program:{
        type:String
    },
    category:{
        type:String
    },
    candidate_status:{
        type:String,
        default:' '
    },
    current_stripe:{
        type:Number,
    },
    memberprofileImage:{
        type:String
    },
    expiry_date:{
        type:String
    },
    userId:{
        type:schema.Types.ObjectId
    }
})

module.exports = mongoose.model('candidate',candidateSchema)