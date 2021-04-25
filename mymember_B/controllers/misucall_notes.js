const misucallNote = require("../models/misucall_notes")
const student = require("../models/addmember");
const user = require("../models/user");
const _ = require("lodash");

exports.seven_to_forteen =(req,res)=>{
    student.find({$and:[{userId:req.params.userId},{rating: {$gte :7,$lte :14}}]})
    .select('firstName')
    .select('lastName')
    .select('memberprofileImage')
    .select('last_contact_missCall')
    .select('rating')
    .populate('membership_details','expiry_date mactive_date membership_name')
    .populate('missYouCall_notes')
    .exec((err,miss_std)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(miss_std)
        }
    })
}

exports.fifteen_to_thirty =(req,res)=>{
    student.find({$and:[{userId:req.params.userId},{rating: {$gte :15,$lte :30}}]})
    .select('firstName')
    .select('lastName')
    .select('memberprofileImage')
    .select('last_contact_missCall')
    .select('rating')
    .populate('membership_details','expiry_date mactive_date membership_name')
    .populate('missYouCall_notes')
    .exec((err,miss_std)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(miss_std)
        }
    })
}

exports.moreThirty =(req,res)=>{
    student.find({$and:[{userId:req.params.userId},{rating: {$gte :30}}]})
    .select('firstName')
    .select('lastName')
    .select('last_contact_missCall')
    .select('memberprofileImage')
    .select('rating')
    .populate('membership_details','expiry_date mactive_date membership_name')
    .populate('missYouCall_notes')
    .exec((err,miss_std)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(miss_std)
        }
    })
}

exports.listApp_and_callHistory =(req,res)=>{
    console.log(req.params.userId)
    user.find({_id:req.params.userId},{upsert:true})
    .populate('missYouCall_note_history')
    .populate('missYouCall_appoinment_history')
    .exec((err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}

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
            var misucall = new misucallNote(req.body);
            misucallObj = _.extend(misucall,obj) 
            
            misucallObj.save((err,note)=>{
                console.log(note)
                if(err){
                    res.send({error:'miss u call notes is not create'})
                    console.log(err)
                }
                else{
                    update = {
                        $push: {missYouCall_notes: note._id},
                        $set: {last_contact_missCall:new Date()}
                    },
                    student.findByIdAndUpdate(req.params.studentId,update)
                    .exec((err,missuCallStd)=>{
                        if(err){
                            res.send({error:'miss u call notes is not add in student'})
                        }
                        else{
                            // res.send(note)
                            user.findByIdAndUpdate(req.params.userId,{$push: { missYouCall_note_history: note._id}})
                            .exec((err,missuCallUser)=>{
                                if(err){
                                    res.send({error:'miss u call notes is not add in school'})
                                }
                                else{
                                    res.send({msg:'miss u call note create successfuly',note:note})
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
    misucallNote.findByIdAndRemove({_id:notesId},(err,removeNote)=>{
        if(err){
            res.send({error:'notes is not delete'})
        }
        else{
            console.log(removeNote)
            student.update({"missYouCall_notes":removeNote._id},{$pull:{"missYouCall_notes":removeNote._id}})
            .exec((err,noteUpdateStd)=>{
                console.log(noteUpdateStd)
                if(err){
                    res.send({error:'notes is not remove in student'});
                }
                else{
                    user.update({"missYouCall_note_history":removeNote._id},{$pull:{"missYouCall_note_history":removeNote._id}})
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
    misucallNote.findByIdAndUpdate(notesid,req.body).exec((err,updateNote)=>{
        if(err){
            res.send({error:'miss you call notes is not update'})
        }
        else{
            res.send({msg:'miss you call notes update successfully'})
        }
    })
}