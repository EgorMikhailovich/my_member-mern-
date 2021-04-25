const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({

    membership_name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    membership_type:{
        type:String,
        required:true
    },
    duration_time:{
        type:String,
        required:true        
    },
    duration_type:{
        type:String,
        required:true        
    },
    total_price:{
        type:Number,
        required:true
    },
    down_payment:{
        type:Number,
        required:true
    },
    payment_type:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
    payment_time:{
        type:String,
        required:true
    },
    payments_types:{
        type:String,
        required:true
    },
    pay:{
        type:Number,
        required:true
    },
    due_every:{
        type:String,
        required:true
    },
    membership_profile:{
        type:String,
    },
    isfavorite:{
        type:Number,
        default:0
    },
    userId:{
        type:String
    },

},
{ timestamps: true }
)

module.exports = mongoose.model('membership',membershipSchema)