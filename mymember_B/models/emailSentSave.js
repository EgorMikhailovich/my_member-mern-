const { any } = require('async');
const mongoose = require('mongoose');
const schema =  mongoose.Schema
const EmailSchema = schema({
   from:{
       type:String,
       require:true
   },
   to:{
       type:Array,
       require:true
   },
   title:{
       type:String,
       require:true
   },
   subject:{
        type:String,
        require:true
   }, 
   template:{
        type:String
   },
   repeat_mail:{
        type:String
   },
   follow_up:{
       type:String
   },
   sent_date:{
        type:String,
   },
   sent_time:{
        type:String,
   },
   DateT:{
       type:Date
   },
   category:{
       type:String,
       default:' '
   },
   email_type:{
       type:String,
       default:' ' 
   },
   email_status:{
       type:Boolean,
   },
   email_auth_key:{
       type:String,
       require:true 
   },
   userId:{
       type:String,
       require:true 
   },
   folderId:{
        type:String,
        require:true
   },
   createdBy:{
        type:String
   },
   adminId:{
        type:String
   }
},
{ timestamps:true }
)

module.exports = mongoose.model('sentOrscheduleEmail', EmailSchema)