const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const organization_setup = new mongoose.Schema(
    {
        accountName: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        account_number: {
            type: Number,
            required: true
        },
        Business_name: {
            type: String,
            required: true
        },
        school_id: {
            type: Number,
            required: true
        },
        Website: {
            type: String,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        business_email: [{
            type: String,
            trim: true,
            required: true,
            unique: true
        }],
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }, country: { type: String, required: true },
        state: {
            type: String,
            required: true
        },
        phone_number:{
            type:String,
            required:true
        },
        tax_id:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },landing_page:{
            type:String,
            required:true
        },
        logo: {
            type: String
        },Monday:{
            start:{type:String},
            end:{type:String}
        },
        Tuesday:{
            start:{type:String},
            end:{type:String}
        },
        Wednesday:{
            start:{type:String},
            end:{type:String}
        },
        Thursday:{
            start:{type:String},
            end:{type:String}
        },
        Friday:{
            start:{type:String},
            end:{type:String}
        },
        Saturday:{
            start:{type:String},
            end:{type:String}
        },
        Sunday:{
            start:{type:String},
            end:{type:String}
        },hours_24_name:[{
            type:String,
            required:true
        }],hours_24_email:[{
            type:String,
            required:true
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Organization_setup", organization_setup);
