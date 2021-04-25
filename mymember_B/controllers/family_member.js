const { findByIdAndUpdate } = require('../models/addmember');
var addmemberModal = require('../models/addmember')
const familyModal = require("../models/family_member");

exports.create = (req,res) =>{
    
    var relationship = req.body.relationship;
    var student_type = req.body.student_type;
    var student_id = req.params.student_id;
    var member_id = req.params.member_id;
    
    addmemberModal.findById(member_id)
    .exec((err,data)=>{
        if(err){
            res.send({error:'student data not found'})
        }
        else{

           var memberDetails={}
           memberDetails.firstName = data.firstName;
           memberDetails.lastName = data.lastName;
           memberDetails.status = data.status;
           memberDetails.relationship = relationship;
           memberDetails.student_type = student_type;
           memberDetails.date = new Date().toLocaleDateString();

           console.log(memberDetails)

           var familyObj = new familyModal(memberDetails)
           familyObj.save((err,familyData)=>{
               if(err){
                   res.send({error:'family is not add'})
                   console.log(err)
               }
               else{
                   addmemberModal.findByIdAndUpdate({_id:student_id},{$push:{ myFaimly:familyData._id }})
                   .exec((err,data)=>{
                       if(err){
                           res.send({error:'family is not add in student'})
                       }
                       else{
                        res.send({msg:'family is add in student'})
                       }
                   })
               }
           })

        }
    })
}

exports.remove =(req,res)=>{
    var member_id = req.params.member_id
    familyModal.findByIdAndRemove({_id:member_id},(err,data)=>{
        if(err){
            res.send({error:'faimly member is not delete'})
        }
        else{
            addmemberModal.update({"myFaimly":member_id},{$pull:{"myFaimly" : member_id }})
            .exec((err,data)=>{
                if(err){
                    res.send({error:'member is not from student'})
                }
                else{
                    res.send({msg:'member is delete from student'})
                }
            })
        }
    })
}

// exports.remove = (req,res)=>{
//     var categoryId = req.params.categoryId;
//           pcategory.findOneAndRemove({_id:categoryId},(err,data)=>{
//                 if(err){
//                     res.send({error:'category is not delete'})
//                 }
//                 else{
//                   program.update({"program_category":categoryId},{$pull:{"program_category":categoryId}},
//                     function(err,data){
//                         if(err){
//                             res.send({error:'category is not delete from program'})
//                         }
//                         else{
//                             res.send({error:'category is delete from program'})
//                         }
//                     })
                             
//                 }
//             })
//     }   