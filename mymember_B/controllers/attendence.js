const student = require("../models/addmember")
const schedule = require("../models/class_schedule")
const attendance = require("../models/attendence")

exports.create = (req,res)=>{
    student.findOne({firstName:req.body.studentName})
    .exec((err,stdData)=>{
        if(err){
            res.send({error:'student data not find'})
        }
        else{
                var stdDetails={
                        firstName:req.body.studentName,
                        lastName:req.body.lastName,
                        image:stdData.memberprofileImage,
                        class:req.body.class_name,
                        userId:req.params.userId,
                        time:req.body.time
                    }
                    var attendanceObj = new attendance(stdDetails)
                    attendanceObj.save((err,attendanceData)=>{
                        if(err){
                            res.send({error:'addendance is not create'})
                            console.log(err)
                        }
                        else{
                            console.log(attendanceData)
                          schedule.findByIdAndUpdate({_id:req.params.scheduleId},{$push:{class_attendance:attendanceData._id}})
                            .exec((err,attendanceUpdte)=>{
                                if(err){
                                    res.send({error:'student addendance is not add in class',Error:err})
                                }
                                else{
                                    console.log(attendanceUpdte)
                                       student.update({"firstName":req.body.studentName},{$set:{rating:0, class_count:stdData.class_count+1, attendence_color:'#00FF00',attendence_status:true}})
                                       .exec((err,data)=>{
                                        if(err){
                                            res.send({error:'student rating is not update'})
                                            console.log(err)
                                            }
                                        else{
                                            res.send({ msg:'student rating is update',attendanceData: attendanceData})
                                          }
                                })
                            }
                          })
                       }
                    })
            //     }
            // })  
        }
    })
}

exports.remove = (req,res)=>{
    attendance.findByIdAndRemove(req.params.attendenceId,(err,removeAttendance)=>{
        if(err){
            res.send({error: 'attendance is not remove'})
        }
        else{
            schedule.update({"class_attendance":removeAttendance._id},{$pull:{"class_attendance":removeAttendance._id}},
            function(err,attendeRemove){
                if(err){
                    res.send({error:'student attendance is not remove in class'})
                }
                else{
                    res.send({msg:'student attendance is remove successfully',result:removeAttendance})
                }
            })
        }
    })
}

exports.list_attendence=(req,res)=>{
    attendance.find({userId:req.params.userId}).exec((err,list)=>{
        if(err){
            res.send({error:'attendence list not found'})
        }
        else{
            res.send(list)
        }
    })
}