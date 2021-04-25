const docFolder = require("../models/doc_folder")

exports.createfolder = (req,res)=>{
   var doc = new docFolder(req.body)
   doc.save((err,document)=>{
       if(err){
           res.send({error:'document folder is not create'})
       }
       else{
           docFolder.findByIdAndUpdate(document._id,{$set:{userId:req.params.userId}})
           .exec((err,doc)=>{
               if(err){
                   res.send({error:'user id is not add in document'})
               }
               else{
                   res.send(doc)
               }
           })
       }
   })
}

exports.readfolder = (req,res)=>{
    docFolder.find({userId:req.params.userId})
    .populate('subFolder')
    .exec((err,folderList)=>{
        if(err){
            res.send({error:'document folder is not find'})
            console.log(err)
        }
        else{
            res.send(folderList)
        }
    })
}

exports.editFolder = (req,res)=>{
    docFolder.findByIdAndUpdate(req.params.docfolderId,req.body)
    .exec((err,updateFolder)=>{
        if(err){
            res.send({error:'document folder is not update'})
        }
        else{
            res.send({msg:'document folder is update successfully'})
        }
    })
}

exports.removeFolder = (req,res)=>{
    docFolder.findByIdAndRemove(req.params.docfolderId)
    .exec((err,removeFolder)=>{
        if(err){
            res.send({error:'document folder is not remove'})
        }
        else{
            res.send({msg:'document folder is remove successfully'})
        }
    })
}