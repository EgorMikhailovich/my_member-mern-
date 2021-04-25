const tempList = require("../models/std_temp_list")
const texttempList = require("../models/std_text_list")
const student = require("../models/addmember")
const async = require('async')

exports.Email_contact_list = (req,res)=>{
tempList.find({userId:req.params.userId})
.exec((err,emailList)=>{
  if(err){
    res.send({code:400,msg:'email list is not found'})
  }
  else{
    res.send({code:200,msg:emailList})
  }
})
}

exports.tempList_create = (req,res)=>{
if(req.body.contact_type == 'Email'){
  var stdId = req.body.studentId
    student.find({_id:stdId})
        .select("firstName")
        .select("lastName")
        .select("email")
        .select("userId")
        .exec((err,data)=>{
        tempList.insertMany(data).then((result)=>{
             async.eachSeries(result,(obj,done)=>{
                tempList.findByIdAndUpdate(obj._id,{$set:{contact_type:req.body.contact_type}},done)
                },function Done(err,List){
                  res.send({code:200,msg:'student add in email contact list'})
                })  
            }).catch((error)=>{
               res.send({code:400,msg:'student is already exist'})
        })
    })
}else if(req.body.contact_type == 'Text'){
  var stdId = req.body.studentId
    student.find({_id:stdId})
        .select("firstName")
        .select("lastName")
        .select("email")
        .select('primaryPhone')
        .select("userId")
        .exec((err,data)=>{
          console.log(data)
          texttempList.insertMany(data).then((result)=>{
             async.eachSeries(result,(obj,done)=>{
                tempList.findByIdAndUpdate(obj._id,{$set:{contact_type:req.body.contact_type}},done)
                },function Done(err,List){
                  res.send({code:200,msg:'student add in text contact list'})
                })  
            }).catch((error)=>{
               res.send({code:400,msg:'student is already exist'})
        })
    })
}
}