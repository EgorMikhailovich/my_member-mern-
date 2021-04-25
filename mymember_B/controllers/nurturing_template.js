const template = require("../models/emailSentSave")
const nurturing_folder = require("../models/email_nurturing_folder")
const key = require("../models/email_key")

function timefun(sd,st){
    var date = sd
    var stime = st
    var spD = date.split('/')
    var spT = stime.split(":")
    console.log(spD,spT)

    var y = spD[2]
    var mo = parseInt(spD[0])-1
    var d = parseInt(spD[1])
    var h = spT[0]
    var mi = spT[1]
    var se = '0'
    var mil = '0'
    console.log(y,mo,d,h,mi,se,mil)
    return  curdat = new Date(y,mo,d,h,mi,se,mil)
   
}

exports.list_template = (req,res)=>{
    nurturing_folder.findById(req.params.folderId)
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
            if(req.body.follow_up === 0){
                var date_iso = timefun(req.body.sent_date,req.body.sent_time)
                console.log(date_iso)
              
                          var obj = {
                              to: req.body.to,
                              from: req.body.from,
                              title:req.body.title,
                              subject:req.body.subject, 
                              template:req.body.template,
                              sent_date: req.body.sent_date,
                              sent_time: req.body.sent_time,
                              DateT:date_iso,
                              repeat_mail: req.body.repeat_mail,
                              follow_up: req.body.follow_up,
                              email_type:'schedule',
                              email_status:true,
                              category:'nurturing',
                              userId:req.params.userId,
                              folderId:req.params.folderId
                          }
                      }

                      else if(req.body.follow_up > 0){
                        var date_iso_follow = timefun(req.body.sent_date,req.body.sent_time)
        
                        console.log(date_iso_follow,'si')
                        date_iso_follow.setDate(date_iso_follow.getDate() + req.body.follow_up);
                        var mdy = moment(date_iso_follow).format('MM/DD/YYYY')    
                        console.log(mdy,'lo')// this is date mm/dd/yyyy
                        console.log(date_iso_follow); // this is iso date time
                        console.log(date_iso_follow.getHours(),'hrou')

                        var obj = {
                            to: req.body.to,
                            from: req.body.from,
                            title:req.body.title,
                            subject:req.body.subject, 
                            template:req.body.template,
                            sent_date: mdy,
                            sent_time: req.body.sent_time,
                            DateT:date_iso_follow,
                            repeat_mail: req.body.repeat_mail,
                            follow_up: req.body.follow_up,
                            email_type:'schedule',
                            email_status:true,
                            category:'nurturing',
                            userId:req.params.userId,
                            folderId:req.params.folderId
                        }
                    }
                    else if(req.body.follow_up < 0){
                        res.send({code:400,msg:'follow up not set less then 0'})
                    } 

                var emailDetail =  new template(obj)
                console.log(emailDetail)
                emailDetail.save((err,emailSave)=>{
           if(err){
              res.send({code:200,msg:'template not save'})
              console.log(err)
          }
          else{
            nurturing_folder.findByIdAndUpdate(req.params.folderId,{$push:{template:emailSave._id}})
            .exec((err,template)=>{
                if(err){
                    res.send({code:400,msg:'nurturing template details is not add in folder'})
                }
                else{
                    res.send({code:200,msg:'nurturing template details is add in folder',result:emailSave})
                }
            })
          }
      })
   
}

exports.remove_template =(req,res)=>{
    template.findByIdAndRemove(req.params.templateId,(err,removeTemplate)=>{
        if(err){
            res.send({error:'nurturing template is not remove'})
        }
        else{
            console.log(removeTemplate)
            nurturing_folder.update({"template":removeTemplate._id},{$pull:{"template":removeTemplate._id}},
            function(err,temp){
                if(err){
                    res.send({error:'nurturing template details is not remove in folder'})
                }
                else{
                    res.send({msg:'nurturing template is remove successfully'})
                }
            })
        }
    })
}

exports.single_tem_update_status =(req,res)=>{
    console.log(req.body.email_status)
    if(req.body.email_status == true){
        template.updateOne({_id:req.params.tempId},{$set:{email_status:true}},(err,resp)=>{
            if(err){
                res.json({code:400,msg:'email nurturing status not deactive'})
            }
            else{
                res.json({code:200,msg:'email nurturing status active successfully'})
            }
        })
    }else if(req.body.email_status == false){
        template.updateOne({_id:req.params.tempId},{$set:{email_status:false}},(err,resp)=>{
            if(err){
                res.json({code:400,msg:'email nurturing status not active'})
            }
            else{
                res.json({code:200,msg:'email nurturing status deactive successfully'})
            }
        })
    }
}

exports.update_template =(req,res)=>{
    template.update({_id:req.params.templateId},req.body,(err,updateTemp)=>{
        if(err){
            res.send({error:'template is not update'})
        }
        else{
            res.send(updateTemp)
        }
    }) 
}

exports.status_update_template =(req,res)=>{
    if(req.body.status == 'false'){
        template.find({$and:[{userId:req.params.userId},{folderId:req.params.folderId}]})
        .exec((err,TempData)=>{
            if(err){
                res.send(err)
            }
            else{
                console.log(TempData)
                async.eachSeries(TempData,(obj,done)=>{
                    template.findByIdAndUpdate(obj._id,{$set:{email_status:false}},done)
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
        template.find({$and:[{userId:req.params.userId},{folderId:req.params.folderId}]})
       .exec((err,TempData)=>{
            if(err){
                res.send(err)
            }
            else{
                console.log(TempData)
                async.eachSeries(TempData,(obj,done)=>{
                    template.findByIdAndUpdate(obj._id,{$set:{email_status:true}},done)
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