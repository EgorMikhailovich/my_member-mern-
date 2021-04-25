const txtList = require("../models/std_text_list")
const std = require("../models/addmember")
const async = require('async')

exports.text_contact_list = (req,res)=>{
txtList.find({userId:req.params.userId})
.exec((err,emailList)=>{
  if(err){
    res.send({code:400,msg:'text list is not found'})
  }
  else{
    res.send({code:200,msg:emailList})
  }
})
}

exports.text_create =  (req,res)=>{
var stdId = req.body.studentId
    std.find({_id:stdId})
        .select("firstName")
        .select("lastName")
        .select("primaryPhone")
        .select("userId")
        .exec((err,data)=>{
            txtList.insertMany(data).then((result)=>{
             async.eachSeries(result,(obj,done)=>{
                txtList.findByIdAndUpdate(obj._id,{$set:{contact_type:req.body.contact_type}},done)
                },function Done(err,List){
                  res.send({msg:'student add in text contact list'})
                })  
            }).catch((error)=>{
               res.send(error)
        })
    })
}