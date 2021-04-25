const birthdayApp = require('../models/birthday_appoinment');
const student = require("../models/addmember")
const user = require("../models/user")
const _ = require('lodash')

exports.birthlist =(req,res)=>{
    birthdayApp.find({ userId: req.params.userId })
    .exec((err, birthApp) => {
        if (err) {
            res.send({ error: 'birthday appoinment not found' })
        }
        else {
            res.send(birthApp)
        }
    })
}

exports.create = (req,res)=>{
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
            var birth_app = new birthdayApp(req.body)
            var birthdayAppoinment = _.extend(birth_app, obj)
          
            birthdayAppoinment.save((err,appoinmentData)=>{
                if(err){
                    res.send({error:'student birthday appoinment is not create'})
                }
                else{
                    user.findByIdAndUpdate(req.params.userId,{ $push:{birthday_appoinment_history:appoinmentData._id }})
                    .exec((err,data)=>{
                        if(err){
                            res.send({error:'student birthday appoinment is not add in school'})
                        }
                        else{
                            res.send({msg:'student birthday appoinment create successfully',appoinment:appoinmentData})
                        }
                    })
                }
            })
        }
   })     
}

exports.remove = (req,res)=>{
    var appoinmentId = req.params.appoinmentId;
    birthdayApp.findByIdAndRemove({ _id: appoinmentId }, (err, removeAppoinment) => {
        if (err) {
            res.send({ error: 'birthday appoinment is not delete' })
        }
        else {
            user.update({ "birthday_appoinment_history": removeAppoinment._id }, { $pull: { "birthday_appoinment_history": removeAppoinment._id } })
                .exec((err, updateAppoinment) => {
                    if (err) {
                        res.send({ error: 'birthday appoinment is not delete in student' })
                    }
                    else {
                        res.send({ msg: 'birthday appoinment is remove successfully' })
                    }
             })
        }

    })
}