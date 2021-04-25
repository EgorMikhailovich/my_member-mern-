const all_temp = require("../models/emailSentSave");
const compose_folder = require("../models/email_compose_folder")
const authKey = require("../models/email_key")
const async = require('async')
const moment = require('moment');

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

exports.getData = (req,res)=>{
let options = {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);
    var a =(formatter.format(new Date()));
    // var str = a
    // var h = str.split(",");
    // console.log(h[0],h[1])
    // var dates = h[0]
    // var d = dates.split('/')
    // var curdat = new Date(`${d[1]} ${d[0]} ${d[2]} ${h[1]}`)

    var str = a
    var h = str.split(",");
    var dates = h[0]
    var d = dates.split('/')
    
    var time12h=h[1] // time change in 24hr
    const [b,time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
   
    console.log(msg= {hour:`${hours}`,min:`${minutes}`})
    // console.log(d[2],d[0],d[1],msg.hour,msg.min,se,mil)
    console.log(msg.hour ,msg.min )
    
    var y = d[2]
    var mo = d[1]-1
    var d = d[0]
    var h = msg.hour
    var mi = msg.min
    var se = '0'
    var mil = '0'
    var curdat = new Date(y,mo,d,h,mi,se,mil)
    console.log(curdat,'cur')
    
    all_temp.aggregate([
        {
            $match: {
                $and: [{ email_status: true },
                { $expr: { $eq: [{ $month: '$DateT' }, { $month: curdat }] } },
                { $expr: { $eq: [{ $dayOfMonth: '$DateT' }, { $dayOfMonth: curdat }] } },
                { $expr: { $eq: [{ $year: '$DateT' }, { $year: curdat }] } },
                { $expr: { $eq: [{ $hour: '$DateT' }, { $hour: curdat }] } },
                { $expr: { $eq: [{ $minute: '$DateT' }, { $minute: curdat }] } },
                ]
            }
        }
    ]).exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'data not found'})
            console.log(err)
        }
        else{
            res.json({code:200,msg:resp})
        }
    })
}

exports.single_temp_update_status = (req,res)=>{
    console.log(req.body.email_status)
    if(req.body.email_status == true){
        all_temp.updateOne({_id:req.params.tempId},{$set:{email_status:true}},(err,resp)=>{
            if(err){
                res.json({code:400,msg:'email status not deactive'})
            }
            else{
                res.json({code:200,msg:'email status active successfully'})
            }
        })
    }else if(req.body.email_status == false){
        all_temp.updateOne({_id:req.params.tempId},{$set:{email_status:false}},(err,resp)=>{
            if(err){
                res.json({code:400,msg:'email status not active'})
            }
            else{
                res.json({code:200,msg:'email status deactive successfully'})
            }
        })
    }
}

exports.status_update_template = (req,res)=>{
    console.log(req.body.email_status)
    if(req.body.email_status == false){
        all_temp.find({$and:[{userId:req.params.userId},{folderId:req.params.folderId}]})
        .exec((err,TempData)=>{
            if(err){
                res.send({code:400,msg:'all email template not deactive'})
            }
            else{
                console.log(TempData)
                async.eachSeries(TempData,(obj,done)=>{
                    all_temp.findByIdAndUpdate(obj._id,{$set:{email_status:false}},done)
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
    else if(req.body.email_status == true){
        all_temp.find({$and:[{userId:req.params.userId},{folderId:req.params.folderId}]})
       .exec((err,TempData)=>{
            if(err){
                res.send({code:400,msg:'all email template not active'})
            }
            else{
                console.log(TempData)
                async.eachSeries(TempData,(obj,done)=>{
                    all_temp.findByIdAndUpdate(obj._id,{$set:{email_status:true}},done)
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

exports.all_email_list = async(req,res)=>{
    all_temp.find({userId:req.params.userId})
    .exec((err,allTemp)=>{
        if(err){
            res.send({code:400,msg:'email list not found'})
        }
        else{
            res.send({code:200,msg:allTemp})
        }
    })
}

exports.list_template = (req,res)=>{
    console.log(req.params.folderId)
    compose_folder.findById(req.params.folderId)
    .populate('template')
    .exec((err,template_data)=>{
        if(err){
            res.send(err)
            console.log(err)
        }
        else{
            res.send(template_data)
        }
    })
}

exports.add_template = async(req,res)=>{
    // var schedule = req.body.schedule
    //    authKey.findOne({userId:req.params.userId})      
    //     .exec((err,key)=>{
    //         if(err){
    //             res.send({Error:'email auth key is not find so schedule is not create',error:err})
    //         }
    //         else{
    //             console.log(key)
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
                    category:'compose',
                    userId:req.params.userId,
                    folderId:req.params.folderId
                }
            }
             else if(req.body.follow_up > 0){
                var date_iso_follow = timefun(req.body.sent_date,req.body.sent_time)

                console.log(date_iso_follow,'si')
                date_iso_follow.setDate(date_iso_follow.getDate() + req.body.follow_up);
                var nD = moment(date_iso_follow).format('MM/DD/YYYY')    
                console.log(nD,'lo')// this is date mm/dd/yyyy
                console.log(date_iso_follow); // this is iso date time
                console.log(date_iso_follow.getHours(),'hrou')
                var obj = {
                    to: req.body.to,
                    from: req.body.from,
                    title:req.body.title,
                    subject:req.body.subject, 
                    template:req.body.template,
                    sent_date: nD,
                    sent_time: req.body.sent_time,
                    DateT:date_iso_follow,
                    repeat_mail: req.body.repeat_mail,
                    follow_up: req.body.follow_up,
                    email_type:'schedule',
                    email_status:true,
                    category:'compose',
                    userId:req.params.userId,
                    folderId:req.params.folderId
                }
            }
            else if(req.body.follow_up < 0){
                res.send({code:400,msg:'follow up not set less then 0'})
            }


             var emailDetail =  new all_temp(obj)
          console.log(emailDetail) 
          emailDetail.save(async(err,emailSave)=>{
              if(err){
                  res.send({Error:'email details is not save',error:err})
                  console.log(err)
              }
              else{
             compose_folder.findByIdAndUpdate(req.params.folderId,{$push:{template:emailSave._id}})
                .exec((err,template)=>{
                    if(err){
                        res.send({error:'compose template details is not add in folder'})
                    }
                    else{
                        res.send({msg:'compose template details is add in folder',result:emailSave})
                    }
                 })
             }
          })
}

exports.update_template =(req,res)=>{
    all_temp.updateOne({_id:req.params.templateId},req.body,(err,updateTemp)=>{
        if(err){
            res.send({code:400,msg:'template is not update'})
        }
        else{
            res.send({code:200,msg:'template update success',result:updateTemp})
        }
    }) 
}

exports.remove_template =(req,res)=>{
    all_temp.findByIdAndRemove(req.params.templateId,(err,removeTemplate)=>{
        if(err){
            res.send({error:'compose template is not remove'})
        }
        else{
            console.log(removeTemplate)
            compose_folder.updateOne({"template":removeTemplate._id},{$pull:{"template":removeTemplate._id}},
            function(err,temp){
                if(err){
                    res.send({error:'compose template details is not remove in folder'})
                }
                else{
                    res.send({msg:'compose template is remove successfully'})
                }
            })
        }
    })
}

exports.multipal_temp_remove =(req,res)=>{
    all_temp.deleteMany({_id:req.body.tempId}).exec((err,resp)=>{
        if(err){
            res.json({code:400,msg:'templates not remove'})
        }
        else{
            res.json({code:200,msg:'template is remove successfully'})
        }
    })
}