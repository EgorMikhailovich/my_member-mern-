const mongoose = require('mongoose');
const schema =  mongoose.Schema
const locationSchema = schema({
    locationName:{
        type:String,
        require:true
    },
    website:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String
    },
    fax:{
        type:String
    },
    street:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipCode:{
        type:String
    },
    adminId:{
        type:String
    },
    createdBy:{
        type:String
    }
},
{ timestamps:true }
)

module.exports = mongoose.model('location', locationSchema)