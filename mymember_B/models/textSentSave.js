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
   msg:{
       type:String,
       require:true 
   },
   text_type:{
      type:String  
   },
   textStatus:{
       type:Boolean,
      
   },
   schedule_date:{
       type:String,
       default:new Date().toLocaleDateString()
   },
   category:{
       type:String,
       default:' '
   },
   userId:{
       type:String,
       require:true
   },
   folderId:{
       type:String,
       require:true
   },
   ACCOUNT_SID:{
       type:String,
       require:true
   },
   AUTH_TOKEN:{
       type:String,
       require:true
   },
   MSG_SERVICE_SID:{
       type:String,
       require:true
   },
   twillo_no:{
       type:String,
       require:true
   }

},
{ timestamps:true }
)

module.exports = mongoose.model('sent_schedule_text', EmailSchema)