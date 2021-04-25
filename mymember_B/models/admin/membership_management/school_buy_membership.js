const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Membershipschema = new mongoose.Schema(
    {
        membershipName:{
            type:String,
            required:true
        },
        membershipType:{
            type:String
        },
        startDate: {
            type: String,
            required: true
        },
        expiry_date:{
            type: String,
        },
        totalp:{
            type: Number,
        
        },
        ptype: {
            type: String,
            required: true
        },
        check_number:{
            type:String,
        },
        card_number:{
            type:String
        },
        card_holder_name:{
            type:String
        },
        cvv_number:{
            type:String
        },
        card_expiry_date:{
            type:String
        },
        payment_status:{
            type:String
        },
        status:{
            type:String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("buy_membership_user", Membershipschema);
