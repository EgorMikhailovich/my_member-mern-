const mongoose = require('mongoose');
const schema =  mongoose.Schema
const allAppoinmentSchema = schema({

    appoinemntId:[
        {type:schema.Types.ObjectId,ref:'Appointment'},
        {type:schema.Types.ObjectId,ref:'birthdayAppoinment'}
    ],
    status:{
        type:String,
        default:'not activity'
    }
})

module.exports = mongoose.model('all_appoinment', allAppoinmentSchema)