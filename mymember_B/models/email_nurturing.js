const mongoose = require('mongoose');
const schema =  mongoose.Schema
const nurturingCategorySchema = schema({
   categoryName:{
       type:String,
       unique:true,
       require:true
   },
   category:{
    type:String,
    default:'nurturing'
   },
   folder:[{
       type:schema.Types.ObjectId,
       ref:'nurturingFolder'
   }],
   userId:{
       type:String 
   }
},
{ timestamps:true }
)

module.exports = mongoose.model('nurturing_category', nurturingCategorySchema)