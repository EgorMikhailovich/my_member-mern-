const mongoose = require('mongoose');
const schema =  mongoose.Schema
const textGenSchema = schema({
    categoryName:{
        type:String,
        unique:true,
        require:true
    },
    category:{
        type:String,
        default:'Genral'
    }, 
    folder:[{
        type:schema.Types.ObjectId,
        ref:'generalFolder'
    }],
   userId:{
       type:String 
   }
},
{ timestamps:true }
)

module.exports = mongoose.model('text_genral', textGenSchema)