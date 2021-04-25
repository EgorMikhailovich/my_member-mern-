const mongoose = require('mongoose');
const schema =  mongoose.Schema
const systemfolderSchema = schema({
    folderName:{
       type:String,
       unique:true,
       require:true
   },
   template:[{
    type:schema.Types.ObjectId,
    ref:'sentOrscheduleEmail'
}],
    createdBy:{
        type:String
    }

},
{ timestamps:true }
)

module.exports = mongoose.model('systemFolder', systemfolderSchema)