const txtKey = require("../models/text_key")
const textSentSave = require("../models/textSentSave")
const generalfolder = require("../models/text_general_folder")
require('dotenv').config()
// textKey
// const MessagingResponse = require('twilio').twiml.MessagingResponse
// exports.recieve =(req,res)=>{
//  const twiml = new MessagingResponse() 
//  console.log('run')
//  twiml.messages('hello world')
//  res.writeHead(200,{'Content-Type':'text/xml'})
//  res.end(twiml.toString())
// }

exports.send_sms =(req,res)=>{
    function sendBulkMessages(msg,to,textKey){
        const client = require('twilio')(textKey.ACCOUNT_SID, textKey.AUTH_TOKEN);
       
        var numbers = []; 
        for(i = 0; i < to.length; i++) 
        { 
            numbers.push(JSON.stringify({  
            binding_type: 'sms', address: to[i]})) 
        } 
       
        const notificationOpts = { 
          toBinding: numbers, 
          body: msg, 
        }; 
       
         client.notify 
        .services(textKey.MSG_SERVICE_SID) 
        .notifications.create(notificationOpts) 
        .then((resp)=>{
            console.log(resp)
            var txt = new textSentSave(req.body)
            txt.save((err,txtMsg)=>{
                if(err){
                    res.send({error:'txt msg not send'})
                }
                else{
                    textSentSave.findByIdAndUpdate(txtMsg._id,{userId:req.params.userId,category:'general',textStatus:'sent'})
                    .exec((err,updatetxt)=>{
                        if(err){
                            res.send({error:'user id is not add in send text'})
                        }
                        else{
                            res.send({msg:'text sms sent successfully'})
                        }
                    })
                }
            })
        }).catch((error)=>{
            res.send(error)
        })
    } 
    txtKey.findOne({userId:req.params.userId})
    .exec((err,textKey)=>{
        if(err){
            res.send({Error:'text authentication key not found',error:err})
        }
        else{
            sendBulkMessages(req.body.msg,req.body.to,textKey)
        }
    })
 }

exports.save_sms =(req,res)=>{
    txtKey.findOne({userId:req.params.userId})
    .exec((err,txtData)=>{
        if(err){
            res.send({Error:'text auth key is not find'})
        }
        else{
            // console.log(txtData)
            // var dt = new Date(req.body.schedule_date)
            // console.log(dt)
            // console.log(dt.getDate())
            // console.log(new Date())
            var obj ={
                from:req.body.from,
                to:req.body.to,
                msg:req.body.msg,
                schedule_date:req.body.schedule_date,
                category:"General",
                textStatus:true,
                text_type:"schedule",
                folderId:req.params.folderId,
                userId:req.params.userId,
                ACCOUNT_SID:txtData.ACCOUNT_SID,
                AUTH_TOKEN:txtData.AUTH_TOKEN,
                MSG_SERVICE_SID:txtData.MSG_SERVICE_SID,
                twillo_no:txtData.twillo_no,
            }
            var txt = new textSentSave(obj)
            txt.save((err,txtMsg)=>{
                if(err){
                    res.send({error:'txt msg not save',Error:err})
                }
                else{
                 generalfolder.update({_id:req.params.folderId},{$push:{template:txtMsg._id}})
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
    textSentSave.deleteOne({_id:req.params.textId},(err,removeText)=>{
        if(err){
            res.send({error:'text sms in not delete'})
        }
        else{
            generalfolder.update({"template":req.params.textId},{$pull:{"template":req.params.textId}},
            function(err,temp){
                if(err){
                    res.send({error:'text sms details is not remove in folder'})
                }
                else{
                    res.send({msg:'text sms is remove successfully',result:temp})
                }
            })
        }
    })
}

exports.update_sms = (req,res)=>{
    textSentSave.updateOne({_id:req.params.textId},req.body,(err,updateText)=>{
        if(err){
            res.send({error:'text sms is not update'})
            console.log(err)
        }
        else{
            res.send(updateText)
        }
    })
}


