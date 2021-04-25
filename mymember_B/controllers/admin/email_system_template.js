const addTemp = require("../../models/emailSentSave")
const systemFolder = require("../../models/email_system_folder")
const async = require('async')

exports.list_template = (req,res)=>{
    systemFolder.findById(req.params.folderId)
    .populate('template')
    .exec((err,template_data)=>{
        if(err){
            res.send({error:'nurturing template list not found'})
            console.log(err)
        }
        else{
            res.send(template_data)
        }
    })
}

exports.add_template = (req,res)=>{
    // key.find({userId:req.params.userId})
    // .exec((err,Key)=>{
    //     if(err){
    //         res.send({Error:'email auth key is not find so schedule is not create',error:err})
    //     }
    //     else{
            var obj ={
                to: req.body.to,
                from: req.body.from,
                title:req.body.title,
                subject:req.body.subject, 
                template:req.body.template,
                sent_date: req.body.sent_date,
                sent_time: req.body.sent_time,
                repeat_mail: req.body.repeat_mail,
                follow_up: req.body.follow_up,
                email_type:'schedule',
                category:'system',
                createdBy:'admin',
                email_status:true,
                // email_auth_key:Key.auth_key,
                adminId:req.params.adminId,
                folderId:req.params.folderId
            }
                var emailDetail =  new addTemp(obj)
                console.log(emailDetail)
                emailDetail.save((err,emailSave)=>{
         if(err){
              res.send(err)
              console.log(err)
          }
          else{
              console.log(emailSave)
            systemFolder.findByIdAndUpdate(req.params.folderId,{$push:{template:emailSave._id}})
            .exec((err,template)=>{
                if(err){
                    res.send({Error:'system template details is not add in folder',error:err})
                }
                else{
                    res.send({msg:'system template details is add in folder',result:emailSave})
                }
            })
          }
      })
    }
//  })
    
// }

exports.remove_template =(req,res)=>{
    addTemp.findByIdAndRemove(req.params.templateId,(err,removeTemplate)=>{
        if(err){
            res.send({error:'system template is not remove'})
        }
        else{
            systemFolder.update({"template":removeTemplate._id},{$pull:{"template":removeTemplate._id}},
            function(err,temp){
                if(err){
                    res.send({error:'system template details is not remove in folder'})
                }
                else{
                    res.send({msg:'system template is remove successfully'})
                }
            })
        }
    })
}

exports.update_template =(req,res)=>{
    addTemp.update({_id:req.params.templateId},req.body,(err,updateTemp)=>{
        if(err){
            res.send({error:'template is not update'})
        }
        else{
            res.send(updateTemp)
        }
    }) 
}

exports.status_update_template = (req,res)=>{
    if(req.body.status == 'false'){
        addTemp.find({$and:[{adminId:req.params.adminId},{folderId:req.params.folderId}]})
        .exec((err,TempData)=>{
            if(err){
                res.send(err)
            }
            else{
                console.log(TempData)
                async.eachSeries(TempData,(obj,done)=>{
                    addTemp.findByIdAndUpdate(obj._id,{$set:{email_status:false}},done)
                    },function Done(err,List){
                      if(err){
                        res.send(err)
                      }
                      else{
                        res.send({msg:'this folder all template is deactivate'})
                      }
                 })  
            }
        })
    }
    else if(req.body.status == 'true'){
        addTemp.find({$and:[{adminId:req.params.adminId},{folderId:req.params.folderId}]})
       .exec((err,TempData)=>{
            if(err){
                res.send(err)
            }
            else{
                console.log(TempData)
                async.eachSeries(TempData,(obj,done)=>{
                    addTemp.findByIdAndUpdate(obj._id,{$set:{email_status:true}},done)
                    },function Done(err,List){
                      if(err){
                        res.send(err)
                      }
                      else{
                        res.send({msg:'this folder all template is activate'})
                      }
                 })  
            }
        })
    }
}
