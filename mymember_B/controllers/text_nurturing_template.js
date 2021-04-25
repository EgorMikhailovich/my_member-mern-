const txt_Key = require("../models/text_key")
const TextSentSave = require("../models/textSentSave")
const txt_nurturing_folder = require("../models/text_nurturing_folder")

// txtKey.findOne({userId:req.params.userId})
// .exec((err,textKey)=>{
//     if(err){
//         res.send({Error:'text authentication key not found',error:err})
//     }
//     else{
//         sendBulkMessages(req.body.msg,req.body.to,textKey)
//     }
// })
// }

exports.save_sms =(req,res)=>{
    txt_Key.findOne({userId:req.params.userId})
    .exec((err,txtData)=>{
        if(err){
            res.send({Error:'text auth key is not find'})
        }
        else{
            var obj ={
                from:req.body.from,
                to:req.body.to,
                msg:req.body.msg,
                schedule_date:req.body.schedule_date,
                category:"Nurturing",
                textStatus:true,
                text_type:"schedule",
                folderId:req.params.folderId,
                userId:req.params.userId,
                ACCOUNT_SID:txtData.ACCOUNT_SID,
                AUTH_TOKEN:txtData.AUTH_TOKEN,
                MSG_SERVICE_SID:txtData.MSG_SERVICE_SID,
                twillo_no:txtData.twillo_no,
            }
            var txt = new TextSentSave(obj)
            txt.save((err,txtMsg)=>{
                if(err){
                    res.send({error:'txt msg not save',Error:err})
                }
                else{
                txt_nurturing_folder.update({_id:req.params.folderId},{$push:{template:txtMsg._id}})
                .exec((err,resp)=>{
                if(err){
                     res.send({error:'txt msg not save in folder'})
                   }
                else{
                    res.send({msg:'txt msg is schedule successfully',data:txtMsg})
                }
            })
         }
      })
    }
  })
}
   

exports.remove_sms = (req,res)=>{
    TextSentSave.remove({_id:req.params.textId},(err,removeText)=>{
        if(err){
            res.send({error:'text sms in not delete'})
        }
        else{
            txt_nurturing_folder.update({"template":req.params.textId},{$pull:{"template":req.params.textId}},
            function(err,temp){
                if(err){
                    res.send({error:'text sms details is not remove in folder'})
                }
                else{
                    res.send({msg:'text sms is remove successfully',result:removeText})
                }
            })
        }
    })
}

exports.update_sms = (req,res)=>{
    TextSentSave.updateOne({_id:req.params.textId},req.body,(err,updateText)=>{
        if(err){
            res.send({error:'text sms is not update'})
            console.log(err)
        }
        else{
            res.send(updateText)
        }
    })
}


