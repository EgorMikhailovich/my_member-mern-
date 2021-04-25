const misucallApp = require("../models/misucall_appoinment")
const student = require("../models/addmember")
const user = require("../models/user")
const _ = require('lodash')

exports.missuList=(req,res)=>{
    misucallApp.find({userId:req.params.userId})
    .exec((err,data)=>{
        if(err){
            res.send({error:'miss u appoinment data not found'})
        }
        else{
            res.send(data)
        }
    })
}

exports.create =(req,res)=>{
    student.findById(req.params.studentId).exec((err,std_data)=>{
        if(err){
            res.send({error:'student data not found'})
        }
        else{
            var obj={
                userId:req.params.userId,
                firstName:std_data.firstName,
                lastName:std_data.lastName
            }
            var misucall_app = new misucallApp(req.body)
            var misUCallAppoinment = _.extend(misucall_app, obj)
          
            misUCallAppoinment.save((err,appoinmentData)=>{
                if(err){
                    res.send({error:'student miss u call appoinment is not create'})
                }
                else{
                    user.findByIdAndUpdate(req.params.userId,{ $push:{missYouCall_appoinment_history:appoinmentData._id }})
                    .exec((err,data)=>{
                        if(err){
                            res.send({error:'student miss u call appoinment is not add in school'})
                        }
                        else{
                            res.send({msg:'student miss u call appoinment create successfully',appoinment:appoinmentData})
                        }
                    })
                }
            })
        }
   })     
}

exports.remove = (req,res)=>{
    var appoinmentId = req.params.appoinmentId;
    misucallApp.findByIdAndRemove({ _id: appoinmentId }, (err, removeAppoinment) => {
        if (err) {
            res.send({ error: 'miss u call appoinment is not delete' })
        }
        else {
            user.update({ "missYouCall_appoinment_history": removeAppoinment._id }, { $pull: { "missYouCall_appoinment_history": removeAppoinment._id } })
                .exec((err, updateAppoinment) => {
                    if (err) {
                        res.send({ error: 'miss u call appoinment is not delete in student' })
                    }
                    else {
                        res.send({ msg: 'miss u call appoinment is remove successfully' })
                    }
             })
        }

    })
}

exports.updateAppoinment =(req,res)=>{
    misucallApp.findByIdAndUpdate(req.params.appoinmentId,req.body)
    .exec((err,updateData)=>{
        if(err){
            res.send({error:'appoinment is not update'})
        }
        else{
            res.send({msg:'appoinment update successfully'})
        }
    })
}