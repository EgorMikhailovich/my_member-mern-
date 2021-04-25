const Membership = require("../../../models/admin/membership_management/school_membership")

exports.listMembership = (req,res)=>{
    Membership.find().exec((err,membershipList)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(membershipList)
        }
    })
}

exports.createMembership = (req,res)=>{
    var Id = req.params.adminId;
    var membershipDetails = req.body;
    var membership = new Membership(membershipDetails);
    membership.save((err,data)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        Membership.findByIdAndUpdate({_id:data._id},{$set:{ adminId:Id }})
         .exec((err,membershipData)=>{
                if(err){
                    res.send({error:'user id is not add in membership'});
                }
                else{
                    res.send({msg:'membership add successfully',membership:data});
                }
         })
    })
}

exports.updateMembership = (req,res)=>{
    Membership.updateOne({_id: req.params.membershipId},req.body)
    .exec((err,updateMembership)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(updateMembership)
        }
    })
}

exports.removeMembership = (req,res)=>{
    Membership.findOneAndRemove({_id:req.params.membershipId})
    .exec((err,delMembership)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(delMembership)
        }
    })
}
