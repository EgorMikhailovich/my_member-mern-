const docSubFolder = require("../models/doc_subfolder")
const DocFolder = require("../models/doc_folder")

exports.documentList = (req,res)=>{
    docSubFolder.findById(req.params.subfolderId)
    .populate('uploadDocument')
    .exec((err,doclist)=>{
        if(err){
            res.send({error:'document list not found'})
        }
        else{
            res.send(doclist)
        }
    })
}

exports.createSubFolder =(req,res)=>{
    var docSub = new docSubFolder(req.body)
    docSub.save((err,subfolder)=>{
        if(err){
            res.send({error:'subfolder is not create'})
        }
        else{
            DocFolder.updateOne({_id: req.params.folderId},{$push:{subFolder:subfolder._id}})
            .exec((err,updteFolder)=>{
                if(err){
                    res.send({error:'subfolder is not add in folder'})
                }
                else{
                    res.send({'msg':'subfolder create successfully',SubFolder:subfolder})
                }
            })
        }
    })
}

exports.editSubFolder =(req,res)=>{
    docSubFolder.updateOne({_id:req.params.subfolderId},req.body)
    .exec((err,updatsubFolder)=>{
        if(err){
            res.send({error:'sub folder is not update'})
        }
        else{
            res.send(updatsubFolder)
        }
    })
}

exports.removeSubFolder = (req,res)=>{
    docSubFolder.findByIdAndRemove(req.params.subfolderId)
    .exec((err,removeFolder)=>{
        if(err){
            res.send({error:'sub folder is not remove'})
        }
        else{
            DocFolder.update({"subFolder":removeFolder._id},{$pull:{"subFolder":removeFolder._id}},
            function(err,data){
                if(err){
                    res.send({error:'subfolder is not remove in folder'})
                }
                else{
                    res.send({msg:'subfolder is remove in folder',result:data})
                }
            })
            
        }
    })
}
