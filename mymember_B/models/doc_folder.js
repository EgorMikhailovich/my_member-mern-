const mongoose = require("mongoose");
const schema = mongoose.Schema

const docFolderSchema = new schema({
    folderName:{
        type:String,
        required:true
    },
    subFolder:[{
        type:schema.Types.ObjectId,
        ref:'docsubfolder'
    }],
    userId:{
        type:String
    },
    createdBy:{
        type:String
    }
})

module.exports = mongoose.model("docfolder", docFolderSchema);

