const mongoose = require("mongoose");
const schema = mongoose.Schema

const docSubFolder = new schema({
    subFolderName:{
        type:String,
        require:true,
        unique:true
    },
    uploadDocument:[{
        type:schema.Types.ObjectId,
        ref:"uploadDocument"
    }]
})

module.exports = mongoose.model("docsubfolder", docSubFolder);

