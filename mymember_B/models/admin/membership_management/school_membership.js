const mongoose = require('mongoose');
const schoolMembershipSchema = new mongoose.Schema({
    membership_name:{
        type:String,
        required:true
    },
    membership_type:{
        type:String,
        required:true
    },
    membership_price:{
        type:Number,
        required:true
    },
    qty_sms:{
        type:Number
    },
    price_per_sms:{
        type:Number
    },
    qty_call:{
        type:Number
    },
    price_per_min:{
        type:Number
    },
    total_price:{
        type:Number
    },
    adminId:{
        type:String
    }
},
{ timestamps: true }
)

module.exports = mongoose.model('school_membership',schoolMembershipSchema)