const Folder = require("../models/email_compose_folder");
const ComposeCat = require('../models/email_compose')

exports.create_folder = (req,res)=>{
    var folderObj = new Folder(req.body)
    folderObj.save((err,folder)=>{
        if(err){
            res.send({error:'folder is not create'})
            console.log(err)
        }
        else{
            console.log(folder)
            ComposeCat.findByIdAndUpdate(req.params.catId,{$push:{ folder:folder._id }})
            .exec((err,folderUpdate)=>{
                if(err){
                    res.send({error:'folder id is not push in category'})
                }
                else{
                    res.send({msg:'folder create successfully',data:folder})
                }
            })
        }
    })
}

exports.update_folder = (req,res)=>{
    Folder.findByIdAndUpdate(req.params.folderId,req.body)
    .exec((err,updateFolder)=>{
        if(err){
            res.send({error:'folder is not update'})
        }
        else{
            res.send({msg:'folder is update successfully'})
        }
    })
}

exports.delete_folder = (req,res)=>{
    Folder.findOneAndRemove({_id:req.params.folderId},(err,delFolder)=>{
        if(err){
            res.send({error:'folder is not remove'})
        }
        else{
            ComposeCat.update({"folder":req.params.folderId},{$pull:{"folder":req.params.folderId}},(err,data)=>{
                if(err){
                    res.send({error:'folder is not remove in compose category'})
                }
                else{
                    res.send({msg:'folder remove successfully'})
                }
            })
        }
    })
}

