const mongoose = require('mongoose');
const upload_sample_Schema = new mongoose.Schema({

    filename:{
        type:String,
        default:"sample file"
    },
    sample_file:{
        type:String,
    }
},
{ timestamps: true }
)

module.exports = mongoose.model('sample_file',upload_sample_Schema)