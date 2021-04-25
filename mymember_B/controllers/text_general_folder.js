const GenFolder = require("../models/text_general_folder")
const GenCat = require("../models/text_general")

exports.addFolder=(req,res)=>{
    var genfolder = new GenFolder(req.body)
    genfolder.save((err,folder)=>{
        if(err){
            res.send({error:'folder is not create'})
            console.log(err)
        }
        else{
            console.log(folder)
            GenCat.findByIdAndUpdate(req.params.catId,{$push:{folder:folder._id}})
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

exports.updateFolder=(req,res)=>{
    GenFolder.updateOne({_id:req.params.folderId},req.body,
    (err,result)=>{
        if(err){
            res.send({error:'general folder is not update'})
        }
        else{
            res.send(result)
        }
    })

}

exports.removefolder = (req,res)=>{
    GenFolder.findOneAndRemove({_id:req.params.folderId},(err,delFolder)=>{
        if(err){
            res.send({error:'folder is not remove'})
        }
        else{
            GenCat.update({"folder":req.params.folderId},{$pull:{"folder":req.params.folderId}},(err,data)=>{
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