const birthdayNote = require("../models/birthday_notes");
const student = require("../models/addmember");
const user = require("../models/user");
const _ = require("lodash");

exports.create = (req,res)=>{
    student.findById(req.params.studentId).exec((err,studetData)=>{
        if(err){
            res.send({error:'student data not found'})
        }
        else{
            var obj ={
                firstName:studetData.firstName,
                lastName:studetData.lastName,
                userId:req.params.userId
            }

            var birthday = new birthdayNote(req.body);
            birthdayObj = _.extend(birthday,obj) 

            birthdayObj.save((err,note)=>{
                if(err){
                    res.send({error:'birthday notes is not create'})
                    console.log(err)
                }
                else{
                    student.findByIdAndUpdate(req.params.studentId,{$push: { birthday_notes: note._id }})
                    .exec((err,birthdayStd)=>{
                        if(err){
                            res.send({error:'birthday notes is not add in student'})
                        }
                        else{
                            // res.send(note)
                            user.findByIdAndUpdate(req.params.userId,{$push: { birthday_note_history: note._id }})
                            .exec((err,birthdayUser)=>{
                                if(err){
                                    res.send({error:'birthday notes is not add in school'})
                                }
                                else{
                                    res.send(note)
                                }
                            })
                        }
                    })
                }
            })

        }
    })
}

exports.remove = (req,res)=>{
    var notesId = req.params.notesId
    birthdayNote.findByIdAndRemove({_id:notesId},(err,removeNote)=>{
        if(err){
            res.send({error:'notes is not delete'})
        }
        else{
            console.log(removeNote)
            student.update({"birthday_notes":removeNote._id},{$pull:{"birthday_notes":removeNote._id}})
            .exec((err,noteUpdateStd)=>{
                console.log(noteUpdateStd)
                if(err){
                    res.send({error:'notes is not remove in student'});
                }
                else{
                    user.update({"birthday_note_history":removeNote._id},{$pull:{"birthday_note_history":removeNote._id}})
                    .exec((err,noteUpdateUser)=>{
                        if(err){
                            res.send({error:'notes is not remove in school'})
                        }
                        else{
                            res.send({msg:'notes is remove successfully'})
                        }
                    })
                }
            })
        }
    })
}

exports.updateNote = (req,res)=>{
    var notesid = req.params.notesId
    console.log(req.body)
    birthdayNote.findByIdAndUpdate(notesid,req.body).exec((err,updateNote)=>{
        if(err){
            res.send({error:'birthday notes is not update'})
        }
        else{
            res.send({msg:'birthday notes update successfully'})
        }
    })
}