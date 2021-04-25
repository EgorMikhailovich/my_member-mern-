const mongoose = require('mongoose');
const schema =  mongoose.Schema
const misuCallAppoinmentSchema = schema({
    
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },  
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    staff:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    },  
    userId:{
        type:schema.Types.ObjectId
    }
},
{ timestamps:true }
)

module.exports = mongoose.model('missYouCallAppoinment', misuCallAppoinmentSchema)