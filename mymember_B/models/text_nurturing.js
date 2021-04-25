const mongoose = require('mongoose');
const schema =  mongoose.Schema
const textNurturingSchema = schema({
   categoryName:{
       type:String,
       require:true
   },
   category:{
    type:String,
    default:'nurturing'
   },
   folder:[{
       type:schema.Types.ObjectId,
       ref:'txt_nurturing_Folder'
   }],
   userId:{
       type:String 
   }
},
{ timestamps:true }
)

module.exports = mongoose.model('txt_nurturing_cat', textNurturingSchema)