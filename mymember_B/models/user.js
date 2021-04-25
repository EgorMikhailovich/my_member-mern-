const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');
const schema = mongoose.Schema
const userSchema = new schema(
    {
        firstname: {
            type: String,
            trim: true,
           
            maxlength: 100
        },
        lastname: {
            type: String,
            trim: true,
           
            maxlength: 100
        },
        isverify:{
            type:Boolean,
            default:false //for email verify status
        },
        emailToken:{
            type:String 
        },
        role: {
            type: Number, 
            default: 0 // diffrentiate between school and admin
        },
        status:{
            type:String,
            default:'Deactivate' // school status active and diactive by admin
        },
        bussinessname: {
            type: String,
            trim: true,
            maxlength: 100
        },
        bussinessAddress: {
            type: String,
            trim: true,
            maxlength: 100
        },
        phone: {
            type: String,
            trim: true,
            maxlength: 100
        },
        secondary_phone:{
            type:String
        },
        industry:{
            type: String,
            trim: true,
            maxlength: 100
        },
        username:{
            type: String,
            trim: true,
           
            maxlength: 100
        },
        email: {
            type: String,
            trim: true,
           
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        about: {
            type: String,
            trim: true
        },
        history: {
            type: Array,
            default: []
        },
        website:{
            type:String
        },
        bussinessEmail:{
            type:Array
        },
        country:{
            type:String
        },
        state:{
            type:String
        },
        city:{
            type:String
        },
        location_name:{
            type:String
        },
        location_address:{
            type:String
        },
        tax_id:{
            type:String
        },
        landing_page:{
            type:String
        },
        logo:{
            type:String,
            default:' '
        },
        start_date:{
            type:String
        },
        reset_token:{
            type:String,
            default:''
        },
        user_membership_details:[{
            type:schema.Types.ObjectId,
            ref:"buy_membership_user"
        }],
        renewal_appoinment_history:[{
            type:schema.Types.ObjectId,
            ref:'studentAppoinment'
        }],
        renewal_history:[{
            type: schema.Types.ObjectId, 
            ref:'renewalNote' 
        }],
        birthday_appoinment_history:[{
            type: schema.Types.ObjectId,
            ref:'birthdayAppoinment'
        }],
        birthday_note_history:[{
            type: schema.Types.ObjectId,
            ref:'birthdayNote'
        }],
        birthday_checkList_history:[{
            type: schema.Types.ObjectId,
            ref:'birthdayChecklist'
        }],
        missYouCall_note_history:[{
            type:schema.Types.ObjectId,
            ref:'missYouCallNote'
        }],
        missYouCall_appoinment_history:[{
            type:schema.Types.ObjectId,
            ref:'missYouCallAppoinment'
        }]
    },
    { timestamps: true }
);

// virtual field
// userSchema
//     .virtual('password')
//     .set(function(password) {
//         this._password = password;
//         this.salt = uuidv1();
//         this.hashed_password = this.encryptPassword(password);
//     })
//     .get(function() {
//         return this._password;
//     });

// userSchema.methods = {
//     authenticate: function(plainText){
//         return this.encryptPassword(plainText) === this.hashed_password;
//     },

//     encryptPassword: function(password){
//         if (!password) return '';
//         try{
//             return crypto
//                 .createHmac('sha1', this.salt)
//                 .update(password)
//                 .digest('hex');
//         }catch (err){
//             return '';
//         }
//     }
// };

module.exports = mongoose.model('User', userSchema);
