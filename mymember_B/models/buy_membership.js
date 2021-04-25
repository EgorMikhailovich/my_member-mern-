const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Membershipschema = new schema(
    {
        student_name: {
            type: String,
        },
        membership_name:{
            type:String
        },
        mactive_date: {
            type: String,
            required: true
        },
        membership_duration:{
            type: String,
            required: true
        },
        expiry_date:{
            type: String,
            required: true
        },
        register_fees: {
            type: Number,
            required: true
        },
        totalp: {
            type: Number,
            required: true
        },
        dpayment: {
            type: Number,
            required: true
        },
        ptype: {
            type: String,
            required: true
        },
        balance: {
            type: Number,
            required: true
        },
        payment_time: {
            type: Number,
            required: true
        },
        payment_type: {
            type: String,
            required: true
        },
        payment_money:{
            type:Number,
            required:true
        },
        due_every:{
            type:Number,
            required:true
        },
        due_every_month:{
            type:String,
            required:true
        },
        pay_inout:{type:String,required:true},

        pay_latter:{type:String,required:true},

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
        membership_status:{
            type:String
        },
        userId:{
            type:String
        },
        createdMonth:{
            type:String,
            default: new Date().getMonth()
        },
        createdYear:{
            type:String,
            default: new Date().getFullYear()
        },
        studentInfo:[{
            type:schema.Types.ObjectId,
            ref:"member"
        }]
  },
    { timestamps: true }
);

module.exports = mongoose.model("Buy_Membership", Membershipschema);
