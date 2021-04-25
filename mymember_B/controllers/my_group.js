var addmemberModal = require('../models/addmember')
const groupModal = require('../models/my_group')

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
           var groupDetails={}
           groupDetails.firstName = data.firstName;
           groupDetails.lastName = data.lastName;
           groupDetails.status = data.status;
           groupDetails.relationship = relationship;
           groupDetails.student_type = student_type;
           groupDetails.date = new Date().toLocaleDateString();

           console.log(groupDetails)

           var groupObj = new groupModal(groupDetails)
           groupObj.save((err,groupData)=>{
               if(err){
                   res.send({error:'family is not add'})
                   console.log(err)
               }
               else{
                   addmemberModal.findByIdAndUpdate({_id:student_id},{$push:{myGroup:groupData._id}})
                   .exec((err,data)=>{
                       if(err){
                           res.send({error:'my group is not add in student'})
                       }
                       else{
                        res.send({msg:'my group is add in student'})
                       }
                   })
               }
           })

        }
    })
}

exports.remove =(req,res)=>{
    var member_id = req.params.member_id
    groupModal.findByIdAndRemove({_id:member_id},(err,data)=>{
        if(err){
            res.send({error:'group member is not delete'})
        }
        else{
            addmemberModal.update({"myGroup":member_id},{$pull:{"myGroup" : member_id }})
            .exec((err,data)=>{
                if(err){
                    res.send({error:'group member is not from student'})
                }
                else{
                    res.send({msg:'group member is delete from student'})
                }
            })
        }
    })
}


