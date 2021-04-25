const txtFolderNur = require("../models/text_nurturing_folder")
const txtNurturingCat = require("../models/text_nurturing")

exports.create_folder =(req,res)=>{
    var folderObj = new txtFolderNur(req.body)
    folderObj.save((err,folder)=>{
        if(err){
            res.send({error:'text nurturing folder is not create'})
            console.log(err)
        }
        else{
            txtNurturingCat.findByIdAndUpdate(req.params.catId,{$push:{ folder:folder._id }})
            .exec((err,folderUpdate)=>{
                if(err){
                    res.send({error:'text nurturing folder id is not push in category'})
                }
                else{
                    res.send({msg:'text nurturing folder create successfully',data:folder})
                }
            })
        }
    })
}

exports.update_folder = (req,res)=>{
    txtFolderNur.findByIdAndUpdate(req.params.folderId,{$set:{folderName:req.body.folderName}})
        .exec((err,updateFolder)=>{
            if(err){
                res.send({error:'text nurturing folder is not update'})
            }
            else{
                res.send({msg:'text nurturing folder is update successfully'})
            }
        })
}

exports.delete_folder = (req,res)=>{
    txtFolderNur.findOneAndRemove({_id:req.params.folderId},(err,delFolder)=>{
        if(err){
            res.send({error:'text nurturing folder is not remove'})
        }
        else{
            txtNurturingCat.update(
            {"folder":req.params.folderId},
            {$pull:{ "folder":req.params.folderId }},
            (err,data)=>{
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
