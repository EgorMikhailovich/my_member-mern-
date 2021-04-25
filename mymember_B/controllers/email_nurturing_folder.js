const folderNur = require("../models/email_nurturing_folder");
const nurturingCat = require('../models/email_nurturing')

exports.create_folder = (req,res)=>{
    console.log(req.body)
    var folderObj = new folderNur(req.body)
    folderObj.save((err,folder)=>{
        if(err){
            res.send({error:'nurturing folder is not create'})
            console.log(err)
        }
        else{
            console.log(folder)
            nurturingCat.findByIdAndUpdate(req.params.catId,{$push:{ folder:folder._id }})
            .exec((err,folderUpdate)=>{
                if(err){
                    res.send({error:'nurturing folder id is not push in category'})
                }
                else{
                    res.send({msg:'nurturing folder create successfully',data:folder})
                }
            })
        }
    })
}

exports.update_folder = (req,res)=>{
    folderNur.findByIdAndUpdate(req.params.folderId,{$set:{folderName:req.body.folderName}})
    .exec((err,updateFolder)=>{
        if(err){
            res.send({error:'nurturing folder is not update'})
        }
        else{
            res.send({msg:'nurturing folder is update successfully'})
        }
    })
}

exports.delete_folder = (req,res)=>{
    folderNur.findOneAndRemove({_id:req.params.folderId},(err,delFolder)=>{
        if(err){
            res.send({error:'nurturing folder is not remove'})
        }
        else{
            nurturingCat.update({"folder":req.params.folderId},{$pull:{ "folder":req.params.folderId }},(err,data)=>{
                if(err){
                    res.send({error:'nurturing folder is not remove in compose category'})
                }
                else{
                    res.send({msg:'nurturing folder remove successfully'})
                }
            })
        }
    })
}

